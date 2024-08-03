import "./Todo.css";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
  <div className="todo">
    <div className="header">
      <h2>{todo.text}</h2>
      <div className="category">{todo.isCompleted}</div>
    </div>
    <div className="description">
      <textarea maxLength={170} placeholder="Texto"></textarea>
    </div>
    <div className="mainButtons">
      <button><i class="bi bi-check-square" onClick={() => completeTodo(todo.id)}></i></button>
      <button className="remove" onClick={() => removeTodo(todo.id)}><i class="bi bi-trash"></i></button>
    </div>
  </div>
  )
}

export default Todo