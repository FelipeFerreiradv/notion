import { Client } from "pg";

const query = async (queryObject: string) => {
  const client = new Client();

  await client.connect();

  const result = await client.query(queryObject);
  if (!result) {
    throw new Error("Result not founded");
  }

  await client.end();
};

const db = {
  query,
};

export default db;
