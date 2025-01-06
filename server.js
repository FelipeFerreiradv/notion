// import { createServer } from "http";

// const server = createServer((request, response) => {
//   response.write("Meu nome e fleie e lucasd bvuosi ferreura kjhdvasjhdvsauvd");

//   return response.end();
// });

// server.listen(3001);

import { fastify } from "fastify";
import { Database } from "./infra/database.js";

const server = fastify();
const database = new Database();

server.post("/videos", (request, reply) => {
  const { title, description, duration } = request.body;

  database.create({
    title,
    description,
    duration,
  });

  return reply.status(201).send();
});

server.get("/videos", (request) => {
  const videos = database.list();

  const search = request.query.search;

  console.log(search);

  return videos;
});

server.put("/videos/:id", (request, reply) => {
  const videosId = request.params.id;
  const { title, description, duration } = request.body;

  database.update(videosId, {
    title,
    description,
    duration,
  });

  return reply.status(204).send();
});

server.delete("/videos/:id", (request, reply) => {
  const videoId = request.params.id;

  database.delete(videoId);

  return reply.status(204).send();
});

server.listen({
  port: 3001,
});
