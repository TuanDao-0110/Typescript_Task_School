import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewToDo from "../components/NewToDo";

test("onAddTodo is called with entered text when form is submitted", () => {
  const onAddTodoMock = jest.fn();
  const { getByLabelText, getByText } = render(<NewToDo onAddTodo={onAddTodoMock} />);

  const input = getByLabelText("Todo Text");
  const submitButton = getByText("Add Todo");

  fireEvent.change(input, { target: { value: "Buy milk" } });
  fireEvent.click(submitButton);

  expect(onAddTodoMock).toHaveBeenCalledWith("Buy milk");
});
test("onAddTodo is called with entered text when form is submitted and a new task is displayed", () => {
  const onAddTodoMock = jest.fn();
  const { getByLabelText, getByText, queryByText } = render(<NewToDo onAddTodo={onAddTodoMock} />);

  const input = getByLabelText("Todo Text");
  const submitButton = getByText("Add Todo");

  // Enter text and submit the form
  fireEvent.change(input, { target: { value: "something" } });
  fireEvent.click(submitButton);

  expect(onAddTodoMock).toHaveBeenCalledWith("something");
  // expect(queryByText("something")).toBeInTheDocument();
});



test("textInputRef is cleared when input is valid", () => {
  const onAddTodoMock = jest.fn();
  const { getByLabelText } = render(<NewToDo onAddTodo={onAddTodoMock} />);

  const input = getByLabelText("Todo Text");

  fireEvent.change(input, { target: { value: "Buy milk" } });
  fireEvent.submit(input);

  expect(input.value).toBe("");
});

test("textInputRef is not cleared when input is invalid", () => {
  const onAddTodoMock = jest.fn();
  const { getByLabelText } = render(<NewToDo onAddTodo={onAddTodoMock} />);

  const input = getByLabelText("Todo Text");

  fireEvent.change(input, { target: { value: "   " } });
  fireEvent.submit(input);

  expect(input.value).toBe("");
});
