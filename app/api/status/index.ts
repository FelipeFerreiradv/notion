import { NextApiRequest, NextApiResponse } from "next";
import database from "@/infra/database";

const status = async (request: NextApiRequest, response: NextApiResponse) => {
  const updateAt = new Date().toISOString();

  const databaseVersionResult = await database.query("SHOW server_version;");
  const databaseVersionValue = databaseVersionResult.rows[0].server_version;

  const databaseConnections = await database.query("SHOW max_connections;");
  const databaseConnectionsValue =
    await databaseConnections.rows[0].max_connections;

  const databaseName = process.env.POSTGRES_DB;
  const databaseOpenedConnections = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1",
    values: [databaseName],
  });
  // "SELECT count(*)::int FROM pg_stat_activity WHERE datname = 'local_db';",
  const databaseOpenedConnectionsValue =
    databaseOpenedConnections.rows[0].count;

  response.status(200).json({
    update_at: updateAt,
    dependencies: {
      database: {
        version: databaseVersionValue,
        max_connections: parseInt(databaseConnectionsValue),
        opened_connections: databaseOpenedConnectionsValue,
      },
    },
  });
};

export default status;
