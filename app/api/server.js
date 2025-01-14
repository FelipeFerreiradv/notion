import { fastify } from "fastify";
import prisma from "../../prisma/prisma.js";

const server = fastify();

server.post("/users", async (request, reply) => {
  const { name, email, age } = request.body;

  await prisma.user.create({
    data: {
      name,
      email,
      age,
    },
  });

  console.log(request.body);

  return reply.status(201).send();
});

server.get("/users", async (request) => {
  let users = [];

  const query = request.query;

  if (query) {
    users = await prisma.user.findMany({
      where: {
        id: request.query.id,
        name: request.query.name,
        email: request.query.email,
        age: request.query.age,
      },
    });
  } else {
    users = await prisma.user.findMany();
  }

  return users;
});

server.put("/users/:id", async (request, reply) => {
  const { name, email, age } = request.body;

  const id = request.params.id;

  await prisma.user.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name,
      email,
      age,
    },
  });

  console.log(request.body);

  return reply.status(204).send();
});

server.delete("/users/:id", async (request, reply) => {
  const id = request.params.id;

  await prisma.user.delete({
    where: {
      id: parseInt(id),
    },
  });

  console.log(request.body);

  return reply.status(204).send();
});

server.listen({
  port: 3333,
});
