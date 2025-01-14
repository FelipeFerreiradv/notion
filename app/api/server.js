import { fastify } from "fastify";
import { DatabaseMemory } from "../../database-memory.js";

const server = fastify();

const usersDatabase = new DatabaseMemory();

server.post("/users", (request, reply) => {
  const { name, email, age } = request.body;

  usersDatabase.create({
    name,
    email,
    age,
  });

  console.log(request.body);

  return reply.status(201).send();
});

server.get("/users", () => {
  const users = usersDatabase.list();

  console.log(users);

  return users;
});

server.put("/users/:id", (request, reply) => {
  const { name, email, age } = request.body;

  const userId = request.params.id;

  usersDatabase.update(userId, {
    name,
    email,
    age,
  });

  return reply.status(204).send();
});

server.delete("/users/:id", (request) => {
  const userId = request.params.id;

  return usersDatabase.delete(userId);
});

server.listen({
  port: 3333,
});
