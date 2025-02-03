import Dexie, { type EntityTable } from "dexie";

interface savedValues {
  id: number;
  key: string;
  value: string | string[] | number | number[] | boolean | object;
}

const db = new Dexie("ValuesDatabase") as Dexie & {
  values: EntityTable<savedValues, "id">;
};

db.version(1).stores({
  values: "++id, key, value",
});

export type { savedValues };
export { db };
