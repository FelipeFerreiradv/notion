import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export const cadaster = async (body) => {
  const user = await api.get(`/users?email=${body.email}`);
  const password = await api.get(`/users?email=${body.password}`);

  if (user && password) throw new Error("User already cadaster");

  await api.post("/users", {
    email: body.email,
    password: body.password,
  });

  return body;
};

export const login = async (body) => {
  const user = await api.get(`/users?email=${body.email}`);

  if (!user && user.password != body.password)
    throw new Error("Error email or password incorrect");
  return user;
};

export default api;
