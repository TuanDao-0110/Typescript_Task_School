import express, { Request, Response, NextFunction } from "express";
import todoRouter from "./router/todo";
import { json, urlencoded } from "body-parser";
import db from "mongoose";
import { unknownEnpoint } from "./middleware/unknownEndpoint";
import { errorHandler } from "./middleware/errorhandler";
const app = express();
app.use(urlencoded({ extended: true }));
db.connect("mongodb://127.0.0.1:27017/todo").then(() => {
  console.log("mongoo connecting");
  app.use(json());

  app.use("/todo", todoRouter);
  app.use(unknownEnpoint);
  app.use(errorHandler);

  app.listen(4000, () => {
    console.log("listening at port 4000....");
  });
});

export default app;
