import React, { useEffect, useState } from "react";
import data from "./data";
import "./Todos.css";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(data);
  });

  const toggleTodoCompletion = (todoId) => {
    const todoToUpdate = todos.find((todo) => todo.id === todoId);
    todoToUpdate.completed = !todoToUpdate.completed;
  };

  const deleteTodo = (todoId) => {
    //TODO: Implement
  };

  return (
    <ul className="list">
      {todos.map((todo) => {
        return (
          <li className="list-item">
            <button onClick={() => toggleTodoCompletion(todo.id)}>
              {todo}
            </button>
            <p>{todo}</p>
            <button onClick={() => deleteTodo(todo)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}
