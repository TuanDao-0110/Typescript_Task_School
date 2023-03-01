// export interface TodoType {
//   id: string;
//   text: string;
// }

// export class Todo {
//   constructor(public id: string, public text: string) {}
// }

import * as mongoose from "mongoose";
import { ObjectId } from "mongodb";
import { Model } from "mongoose";
type TodoType = TodoModel & mongoose.Document;

export interface TodoModel {
  title: {
    type: string;
    required: [true];
  };
  description: {
    type: string;
    required: [true];
  };
}

const Todoschema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

Todoschema.set("toJSON", {
  transform: (document, returnObject) => {
    returnObject.id = returnObject._id.toString();
    delete returnObject._id;
    delete returnObject.__v;
  },
});

const Todo: Model<TodoType> = mongoose.model<TodoType>("todo", Todoschema);

export default Todo;
