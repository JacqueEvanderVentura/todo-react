import { useState, useReducer } from "react";
import "./App.css";
import reducer from "./reducer";


// const initialState = {
//   items: [],                   <---- I'm not using initialState because this app won't need multiple states;
// };

function App() {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  return (
    <>
      <label>Title</label>
    </>
  );
}

export default App;
