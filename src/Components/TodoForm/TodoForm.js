import React from "react";
import { useState, useReducer } from "react";
import "./TodoForm.css";

import reducer from "../../reducer";

export const TodoForm = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <form>
        <label htmlFor="inputTitle">Title</label>
        <input id="inputTitle" />

        <label htmlFor="inputDescription">Description (optional)</label>
        <textarea id="inputDescription" />
        <button>Add</button>
      </form>
    </>
  );
};
