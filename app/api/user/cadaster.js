import { cadaster } from "../../../services/user";

const handler = (req, res) => {
  try {
    const newUser = cadaster(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

export default handler;
