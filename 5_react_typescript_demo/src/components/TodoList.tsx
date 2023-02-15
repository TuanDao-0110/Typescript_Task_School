import React, { useRef, useState } from "react";
import { todoProp } from "../todo.model";
const TodoList: React.FC<todoProp> = (props) => {
  const [editing, setEditing] = useState<boolean>(false);
  const newValueRef = useRef<HTMLInputElement>(null);
  return (
    <ul>
      {props.items.map((todo, index) => {
        return (
          <li key={todo.id}>
            {editing ? (
              <>
                <input type="text" defaultValue={todo.text} ref={newValueRef} required />{" "}
                <button
                  onClick={() => {
                    props.toDoEdit(todo.id, newValueRef.current!.value);
                    setEditing(false);
                  }}
                >
                  Done
                </button>
              </>
            ) : (
              <span>{todo.text}</span>
            )}
            <button
              // onClick={() => props.onDelete(todo.id)}
              onClick={props.onDelete.bind(null, todo.id)}
            >
              Delete
            </button>
            {editing ? "" : <button onClick={setEditing.bind(null, true)}>Edit</button>}
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
