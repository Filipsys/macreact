import Dexie, { type EntityTable } from "dexie";

interface savedValues {
  key: string;
  value: object;
}

const db = new Dexie("ValuesDatabase") as Dexie & {
  values: EntityTable<savedValues>;
};

db.version(1).stores({
  values: "++id, key, value",
});

export type { savedValues };
export { db };
