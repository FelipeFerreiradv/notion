"use server";

import { cadaster } from "@/services/user";
import { NextApiRequest, NextApiResponse } from "next";
import { redirect } from "next/navigation";

export const newUser = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const newUser = cadaster(req.body);
    res.status(200).json(newUser);

    redirect("/");
  } catch (err) {
    res.status(400).json(err);
  }
};
