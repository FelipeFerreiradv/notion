// import { randomUUID } from "crypto";
// import prisma from "../../../prisma/prisma.js";

// export class DatabseUser {
//   async list(search) {
//     let users;

//     if (search) {
//       users = await prisma`SELECT * FROM users where name ilike "%${search}%"`;
//     } else {
//       users = await prisma`SELECT * FROM users`;
//     }

//     return users;
//   }
//   async create(user) {
//     const id = randomUUID();
//     const { name, email, age } = user;

//     await prisma`INSERT INTO users (id, name, email, age) VALUES (${id}, ${name}, ${email}, ${age})`;
//   }
//   async update(id, user) {}
//   async delete(id) {}
// }
