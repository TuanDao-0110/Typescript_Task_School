import React, { useState } from "react";
import "./App.css";
import NewToDo from "./components/NewToDo";
import TodoList from "./components/TodoList";
import { todo } from "./todo.model";

const App: React.FC = () => {
  const [toDos, setToDos] = useState<Array<todo>>([]);
  // add to do
  const toDoAddHandler = (text: string) => {
    setToDos((prev) => [...prev, { id: Math.random().toString(), text }]);
  };
  // delete to do
  const toDoDeleteHanlder = (id: string) => {
    let temp = toDos.filter((i) => i.id !== id);
    setToDos([...temp]);
  };
  // edit
  const toDoEdit = (id: string, newText: string) => {
  setToDos((prev) =>
    prev.map((toDo) => {
      if (toDo.id === id) {
        return { ...toDo, text: newText };
      } else {
        return toDo;
      }
    })
  );
  };
  return (
    <div className="App">
      <NewToDo onAddTodo={toDoAddHandler} />
      <TodoList items={toDos} onDelete={toDoDeleteHanlder} toDoEdit={toDoEdit} />
    </div>
  );
};

export default App;
