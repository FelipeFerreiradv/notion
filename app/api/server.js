import { fastify } from "fastify";
import prisma from "../../prisma/prisma.js";
import cors from "@fastify/cors";
import jwt from "jsonwebtoken";

const server = fastify({ logger: true });

await server.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
});

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "1h" }
  );
};

server.post("/login", async (request, reply) => {
  const { email } = request.body;

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!user) {
    return reply.status(401).send({ error: "User not found" });
  }

  const token = generateToken(user);

  return reply.status(200).send({ token });
});

server.post("/users", async (request, reply) => {
  const { name, email, perflog, password, age } = request.body;

  await prisma.user.create({
    data: {
      name,
      email,
      perflog,
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
        perflog: request.query.perflog,
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
  const { name, email, perflog, password, age } = request.body;

  const id = request.params.id;

  await prisma.user.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name,
      email,
      perflog,
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

const verifyToken = (request, reply, done) => {
  const authHeader = request.headers["authorization"];
  if (!authHeader) {
    return reply.status(403).send({ error: "Token is required" });
  }

  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) return reply.status(403).send({ error: "Invalid token" });
    request.user = decoded;
    done();
  });
};

server.get("/profile", { preHandler: verifyToken }, async (request, reply) => {
  const userId = request.user.id;
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    return reply.status(404).send({ error: "User not found" });
  }

  return reply.status(200).send({ user });
});

try {
  server.listen({
    port: 3333,
  });

  console.log("Server running at http://localhost:3333");
} catch {
  throw new Error("Error to connect server");
}
