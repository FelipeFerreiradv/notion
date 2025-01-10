let users = [];

export const cadaster = (body) => {
  const user = users.find(({ email }) => email === body.email);

  if (user) throw new Error("Already user cadater");

  users.push(body);
  return body;
};

export const login = (body) => {
  const user = users.find(({ email }) => email === body.email);

  if (!user) throw new Error("user not found");
  if (!user.password != body.password) throw new Error("Incorrect password");

  return user;
};
