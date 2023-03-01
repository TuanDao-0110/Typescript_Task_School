"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_1 = __importDefault(require("./router/todo"));
const body_parser_1 = require("body-parser");
const mongoose_1 = __importDefault(require("mongoose"));
const unknownEndpoint_1 = require("./middleware/unknownEndpoint");
const errorhandler_1 = require("./middleware/errorhandler");
const app = (0, express_1.default)();
app.use((0, body_parser_1.urlencoded)({ extended: true }));
mongoose_1.default.connect("mongodb://127.0.0.1:27017/todo").then(() => {
    console.log("mongoo connecting");
    app.use((0, body_parser_1.json)());
    app.use("/todo", todo_1.default);
    app.use(unknownEndpoint_1.unknownEnpoint);
    app.use(errorhandler_1.errorHandler);
    app.listen(4000, () => {
        console.log("listening at port 4000....");
    });
});
exports.default = app;
