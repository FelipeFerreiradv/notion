import { cookies as nextCookies } from "next/headers";

export const getCookies = () => {
  const cookieStore = nextCookies();
  const email = cookieStore.get("email")?.value || null;
  const password = cookieStore.get("password")?.value || null;

  const result = JSON.stringify({ email, password });

  return result;
};
