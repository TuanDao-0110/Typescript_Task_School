"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeTodo = exports.updateTodo = exports.getAllTodo = exports.createTodo = void 0;
const message_1 = require("../models/message");
const todo_1 = __importDefault(require("../models/todo"));
// const toDo: Todo[] = [];
const createTodo = async (req, res, next) => {
    try {
        const data = req.body;
        let todos = await todo_1.default.create(data);
        todos.save();
        res.status(201).json({ msg: message_1.SuccessMessage.CREATE_TODO, data: todos });
    }
    catch (error) {
        next(Error(error.message));
    }
};
exports.createTodo = createTodo;
const getAllTodo = async (req, res, next) => {
    try {
        const data = await todo_1.default.find({});
        return res.status(200).json({ msg: message_1.SuccessMessage.GET_ALL_TODO, data });
    }
    catch (error) {
        next(Error(error.message));
    }
};
exports.getAllTodo = getAllTodo;
const updateTodo = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await todo_1.default.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(201).json({ msg: message_1.SuccessMessage.UPDATED_TODO, data: result });
    }
    catch (error) {
        next(Error(error.message));
    }
};
exports.updateTodo = updateTodo;
const removeTodo = async (req, res, next) => {
    try {
        const id = req.params.id;
        console.log(id);
        const result = await todo_1.default.findByIdAndDelete(id);
        return res.status(200).json({ msg: message_1.SuccessMessage.REMOVE_TODO });
    }
    catch (error) {
        next(Error(error.message));
    }
};
exports.removeTodo = removeTodo;
