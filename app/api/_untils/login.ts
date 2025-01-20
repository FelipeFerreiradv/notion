import { cookies } from "next/headers";

export const login = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("authorization")?.value || null;

  return token;
};
