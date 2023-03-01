import { Router } from "express";
import { createTodo, getAllTodo, removeTodo, updateTodo } from "../controller/todo";
const router = Router();

router
  .get("/", getAllTodo)

  .post("/", createTodo)

  .patch("/:id", updateTodo)

  .delete("/:id",removeTodo);

export default router;
