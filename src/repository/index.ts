import { drizzle } from "drizzle-orm/bun-sqlite";
import { migrate } from "drizzle-orm/bun-sqlite/migrator";

import { Database } from "bun:sqlite";
import * as schema from "./schema";

const sqlite = new Database("sqlite.db");

export const db = drizzle(sqlite, { schema, logger: true });

migrate(db, { migrationsFolder: "migrations" });
