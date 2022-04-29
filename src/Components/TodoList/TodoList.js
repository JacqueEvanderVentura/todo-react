import React from 'react'

export const TodoList = ({todos, dispatch}) => {
  return (
    <table border='1'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
            {todos.map(todo=> {return (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{(todo.isDone.toString())}</td>
              </tr>
            )})}
        </tbody>
    </table>
  )
}
