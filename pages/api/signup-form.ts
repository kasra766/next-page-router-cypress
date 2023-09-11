import type { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  if (method === "POST") {
    if (body.user_name !== "amir") {
      res.status(200).json({ message: "success" });
      return;
    }
    res.status(400).json({ message: "user is ban" });
  }
}
