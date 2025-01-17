"use server";

import { login } from "@/services/user";
import { NextApiRequest, NextApiResponse } from "next";
import { redirect } from "next/navigation";

export const user = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const user = await login(req.body);
    res.status(200).json(user);

    return user;
  } catch (err) {
    res.status(400).json(err);
    redirect("/login/signup");
  }
};
