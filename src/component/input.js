import React, { useState } from "react";

export default function Input({ Data, inptext, value }) {
  const setData = (e) => {
    Data(e);
  };
  return (
    <div>
      <input
        type="text"
        placeholder={inptext}
        value={value}
        onChange={setData}
      />
    </div>
  );
}
