import { RequestHandler } from "express";
import { ErrorMessage, SuccessMessage } from "../models/message";
import Todo, { TodoModel } from "../models/todo";
// const toDo: Todo[] = [];

export const createTodo: RequestHandler = async (req, res, next) => {
  try {
    const data: TodoModel = req.body;
    let todos = await Todo.create(data);
    todos.save();
    res.status(201).json({ msg: SuccessMessage.CREATE_TODO, data: todos });
  } catch (error: any) {
    next(Error(error.message));
  }
};

export const getAllTodo: RequestHandler = async (req, res, next) => {
  try {
    const data = await Todo.find({});
    return res.status(200).json({ msg: SuccessMessage.GET_ALL_TODO, data });
  } catch (error: any) {
    next(Error(error.message));
  }
};

export const updateTodo: RequestHandler<{ id: string }> = async (req, res, next) => {
  try {
    const id = req.params.id;

    const result = await Todo.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(201).json({ msg: SuccessMessage.UPDATED_TODO, data: result });
  } catch (error: any) {
    next(Error(error.message));
  }
};

export const removeTodo: RequestHandler<{ id: string }> = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(id)
    const result = await Todo.findByIdAndDelete(id);
    return res.status(200).json({ msg: SuccessMessage.REMOVE_TODO });
  } catch (error: any) {
    next(Error(error.message));
  }
};
