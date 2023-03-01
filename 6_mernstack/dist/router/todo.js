"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_1 = require("../controller/todo");
const router = (0, express_1.Router)();
router
    .get("/", todo_1.getAllTodo)
    .post("/", todo_1.createTodo)
    .patch("/:id", todo_1.updateTodo)
    .delete("/:id", todo_1.removeTodo);
exports.default = router;
