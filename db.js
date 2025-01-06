import postgres from "postgres";

const { PG_HOST, PG_DATABASE, PG_USER, PG_PASSWORD } = process.env;

const sql = postgres(URL, { require });

export default sql;
