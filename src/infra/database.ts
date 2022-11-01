import { database, host, password, user } from "@configs/database.json";
import { createPool } from "mysql2";

export const connection = createPool({
  host,
  user,
  password,
  database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
