import React from "react";
import { useState, useReducer } from "react";
import "./TodoForm.css";

import { TodoList } from '../TodoList/TodoList'
import reducer from "../../Logic/reducer";
import { ACTIONS } from "../../Logic/actions";

export const TodoForm = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({type: ACTIONS.ADD_TODO, payload:{title: title, description: description}});
    
    setTitle("");
    setDescription("");
}
console.log(todos); // Added this console.log so that you can check the object when it changes its value :)
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputTitle">Title</label>
        <input value={title} onChange={(e)=>setTitle(e.target.value)} id="inputTitle" />

        <label htmlFor="inputDescription">Description (optional)</label>
        <textarea id="inputDescription" value={description} onChange={(e)=>setDescription(e.target.value)} />
        <button>Add</button>
      </form>
      <TodoList todos={todos} dispatch={dispatch} />
    </>
  );
};
