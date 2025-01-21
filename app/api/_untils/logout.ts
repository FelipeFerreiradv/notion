import { deleteCookie } from "cookies-next";
import { redirect } from "next/navigation";

export const logoutUser = () => {
  deleteCookie("authorization");
  redirect("/product");
};
