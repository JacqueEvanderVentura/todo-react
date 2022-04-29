export default function newTodo(title, description){
  return {id: Date.now(), title: title, description: description, isDone: false}
}