import React from "react";
import './TodoList.css'
import { ACTIONS } from "../../Logic/actions";

export const TodoList = ({ todos, dispatch }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th colSpan={2}>Status</th>
        </tr>
      </thead>

      <tbody>
        {todos.length>0?todos.map((todo) => {
          return (
            <tr key={todo.id} style={todo.isDone? {textDecoration: 'line-through', fontStyle: 'italic', backgroundColor: "#666", color: '#FF'}: {} }>
              <td>{todo.id}</td>

              <td>
                <input
                  type="text"
                  value={todo.title}
                  onChange={(e) =>
                    dispatch({
                      type: ACTIONS.EDIT_TODO_TITLE,
                      payload: { id: todo.id, title: e.target.value },
                    })}/>
              </td>

              <td>
                <input
                  value={todo.description}
                  onChange={(e) =>
                    dispatch({
                      type: ACTIONS.EDIT_TODO_DESCRIPTION,
                      payload: { id: todo.id, description: e.target.value },
                    })}/>
              </td>

              <td className="pointer"
                onClick={() =>
                  dispatch({
                    type: ACTIONS.TOGGLE_STATUS,
                    payload: { id: todo.id },
                  })}>
                {todo.isDone?"Done":"Not completed"}
              </td>

              <td>
                <button className="button-delete pointer" onClick={() =>
                  dispatch({
                    type: ACTIONS.DELETE_TODO,
                    payload: { id: todo.id },
                  })}><strong>DELETE</strong></button>
              </td>
              
            </tr>
          );
        }):<tr><td colSpan={4} style={{fontStyle: 'italic'}}>No hay todos</td></tr>}
      </tbody>
    </table>
  );
};
