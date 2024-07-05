import React from "react";
import Todo from "./todo";

export default function Todos({ todos, deletE }) {
  const deLete = (deleteIndex) => {
    deletE(deleteIndex);
  };

  return (
    <div>
      {todos.map((todo, index) => (
        <Todo
          key={todo.id}
          todo={todo}
          className="todo"
          index={index}
          deleteIndex={deLete}
        />
      ))}
    </div>
  );
}
