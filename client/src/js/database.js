import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// Add some code below which will take updated content and save it to IndexedDB.
export const putDb = async (content) => {
  const db = await openDB("jate", 1);

  const transaction = db.transaction("jate", "readwrite");

  const store = transaction.objectStore("jate");

  const request = store.put({ id: 1, value: content });

  const result = await request;
  console.log("🚀 - data saved to the database", result.value);
};

// Add some code below which will get all content from IndexedDB.
export const getDb = async () => {
  const db = await openDB("pwaDB", 1);

  const transaction = jateDb.transaction("pwaDB", "readonly");

  const store = tx.objectStore("pwaDB");

  const request = store.get(1);
  const result = await request;
  result
    ? console.log("🚀 - data retrieved from the database", result.value)
    : console.log("🚀 - data not found in the database");

  return result?.value;
};

initdb();
