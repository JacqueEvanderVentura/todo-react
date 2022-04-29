import React from "react";
import { ACTIONS } from "../../Logic/actions";

export const TodoList = ({ todos, dispatch }) => {
  return (
    <table border="1">

      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      
      <tbody>
        {todos.map((todo) => {
          return (
            <tr key={todo.id}>
              <td>{todo.id}</td>

              <td>
                <input
                  type="text"
                  value={todo.title}
                  onChange={(e) =>
                    dispatch({
                      type: ACTIONS.EDIT_TODO_TITLE,
                      payload: { id: todo.id, title: e.target.value },
                    })
                  }
                />
              </td>

              <td>
                <input
                  value={todo.description}
                  onChange={(e) =>
                    dispatch({
                      type: ACTIONS.EDIT_TODO_DESCRIPTION,
                      payload: { id: todo.id, description: e.target.value },
                    })
                  }
                />
              </td>

              <td onClick={()=>dispatch({type:ACTIONS.TOGGLE_STATUS, payload:{id: todo.id}})}>{todo.isDone.toString()}</td>

            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
