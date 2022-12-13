import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const AddMovie = ({ handleAdd }) => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    posterURL: "",
    rate: "",
    id: uuidv4(),
  });

  const handlechange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const addNewM = () => {
    handleAdd(inputs);
  };

  return (
    <div className="App-headeree">
      <input className="border" placeholder="title" name="title" onChange={handlechange} />
      <input
      className="border"
        placeholder="description"
        name="description"
        onChange={handlechange}
      />
      <input className="border" placeholder="posterURL" name="posterURL" onChange={handlechange} />
      <input className="border" placeholder="rate" name="rate" onChange={handlechange} />
      <button className="border" onClick={addNewM}>Submit</button>
    </div>
  );
};

export default AddMovie;
