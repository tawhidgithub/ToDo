import React, { useState } from "react";
import Input from "./input";

export default function NewToDo(props) {
  const [title, setTitle] = useState("");
  const [dis, setDis] = useState("");

  const DataFromTitle = (Data) => {
    setTitle(Data.target.value);
    console.log(Data.target.value);
  };
  const DataFromDis = (Data) => {
    setDis(Data.target.value);
    console.log(Data.target.value);
  };
  const HandelSubmit = (e) => {
    e.preventDefault();
    props.AddToDos({ title, dis });
  };

  return (
    <>
      <form onSubmit={HandelSubmit}>
        <div>
          <Input Data={DataFromTitle} inptext={"Enter a Title"} value={title} />
        </div>
        <div>
          <Input
            Data={DataFromDis}
            inptext={"Enter a Description"}
            value={dis}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
