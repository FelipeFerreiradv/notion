import { fastify } from "fastify";
import prisma from "../../prisma/prisma.js";
import cors from "@fastify/cors";

const server = fastify();

await server.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
});

server.post("/users", async (request, reply) => {
  const { name, email, password, age } = request.body;

  await prisma.user.create({
    data: {
      name,
      email,
      password,
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
        password: request.query.password,
        age: request.query.age,
      },
    });
  } else {
    users = await prisma.user.findMany();
  }

  return users;
});

server.put("/users/:id", async (request, reply) => {
  const { name, email, password, age } = request.body;

  const id = request.params.id;

  await prisma.user.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name,
      email,
      password,
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

try {
  server.listen({
    port: 3333,
  });

  console.log(`Server running at ${server}`);
} catch {
  throw new Error("Error to connect server");
}
