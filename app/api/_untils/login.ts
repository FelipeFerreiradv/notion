import { cookies } from "next/headers";

export const login = async () => {
  const cookieStore = await cookies();
  return cookieStore.get("authorization")?.value || null;
};
