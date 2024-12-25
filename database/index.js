// const postgres = require("postgres");
// // import postgres from "postgres";
// require("dotenv").config();

// let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

// export const sql = postgres({
//   host: PGHOST,
//   database: PGDATABASE,
//   username: PGUSER,
//   password: PGPASSWORD,
//   port: 5432,
//   ssl: "require",
//   connection: {
//     options: `project=${ENDPOINT_ID}`,
//   },
// });

require("dotenv").config(); // .env файлын утгуудыг унших
const { Pool } = require("pg");

// PostgreSQL Pool тохиргоо
export const pool = new Pool({
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT || 5432,
  ssl: {
    rejectUnauthorized: false, // SSL тохиргоо
  },
});

// Холболтыг шалгах
pool
  .connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.error("Error connecting to PostgreSQL:", err));
