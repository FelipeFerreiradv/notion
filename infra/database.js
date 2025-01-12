import { Client } from "pg";

const query = async (queryObject) => {
  try {
    const client = new Client({
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT,
      user: process.env.POSTGRES_USER,
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
    });

    await client.connect();

    const result = await client.query(queryObject);
    if (!result) {
      throw new Error("Result not founded");
    }
  } catch {
    throw new Error("Error to connect client");
  } finally {
    await client.end();
  }
};

const db = {
  query,
};

export default db;
