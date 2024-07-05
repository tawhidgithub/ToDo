import React from "react";

import { FaDeleteLeft } from "react-icons/fa6";

export default function Todo({ todo, index, deleteIndex }) {
  const { title, dis } = todo;

  const deLete = () => {
    deleteIndex(index);
  };
  return (
    <div className="todos">
      <article>
        <div className="todoDiv">
          <div>
            {" "}
            <h1>{title}</h1>
            <p className="dis"> {dis}</p>
          </div>
          <div className="delete">
            <FaDeleteLeft className="Icon" onClick={deLete} />
          </div>
        </div>
      </article>
    </div>
  );
}
