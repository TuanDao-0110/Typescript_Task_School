import React, { useMemo, useRef, useState } from "react";
import { todoProp } from "../todo.model";

const TodoList: React.FC<todoProp> = (props) => {
  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const newValueRef = useRef<HTMLInputElement>(null);
  // select task we want to check by it's ID
  const handleEditClick = (id: string) => {
    setEditingItemId(id);
  };
  // handleDoneClick with that id ---> if it empty we  anything
  const handleDoneClick = (id: string) => {
    if (newValueRef.current?.value.trim().length === 0) {
      return;
    }
    props.toDoEdit(id, newValueRef.current!.value);
    setEditingItemId(null);
  };


  return (
    <ul>
      {props.items.map((todo, index) => {
        return (
          <li key={todo.id}>
            {editingItemId === todo.id ? (
              <>
                <input type="text" defaultValue={todo.text} ref={newValueRef} required />{" "}
                <button onClick={() => handleDoneClick(todo.id)}>Done</button>
              </>
            ) : (
              <span>{todo.text}</span>
            )}
            <button onClick={props.onDelete.bind(null, todo.id)}>Delete</button>
            {editingItemId === todo.id ? "" : <button onClick={() => handleEditClick(todo.id)}>Edit</button>}
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
