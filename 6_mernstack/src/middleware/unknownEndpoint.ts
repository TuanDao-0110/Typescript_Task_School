import { RequestHandler } from "express";
export const unknownEnpoint: RequestHandler = (req, res) => {
  return res.status(404).send("unknown endpoint");
};
