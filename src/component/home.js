import React, { useState } from "react";
import Todos from "./todos";
import NewToDo from "./newToDo";
import "./home.css";

export default function Home() {
  const todos = [
 
  ];
  const [ToDos, setToDos] = useState(todos);

  const AddToDos = ({ title, dis }) => {
    setToDos([...ToDos, { id: ToDos.length + 1, title, dis }]);
  };
  const deLete = (newIndex) => {
    const updateTodos = ToDos.filter((context, index) => index !== newIndex);
    setToDos(updateTodos);
  };

  return (
    <div className="body">
      <div className="main">
        <NewToDo AddToDos={AddToDos} />

        <div className="underline"></div>
        <Todos todos={ToDos} deletE={deLete} />
      </div>
    </div>
  );
}
