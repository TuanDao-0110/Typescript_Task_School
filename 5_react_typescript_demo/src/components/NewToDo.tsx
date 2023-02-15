import React, { useRef } from "react";
interface NewToDoProps {
  onAddTodo: (todoText: string) => void;
}
const NewToDo: React.FC<NewToDoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const toDoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInputRef.current!.value;
    if (enteredText.trim().length === 0) {
    } else {
      props.onAddTodo(enteredText);
      textInputRef.current!.value = "";
    }
  };
  return (
    <form onSubmit={toDoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} required />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewToDo;
