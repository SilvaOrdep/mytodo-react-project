import "./Todo.css";

const Todo = ({ todo, removeTodo }) => {
  return (
  <div className="todo">
    <div className="header">
      <h2>{todo.text}</h2>
      <div className="category">(trabalho)</div>
    </div>
    {/* troquei a descrição para um textarea */}
    <div className="description">
      <textarea placeholder="Texto"></textarea>
    </div>
    <div className="mainButtons">
      <button><i class="bi bi-check-square"></i></button>
      <button><i class="bi bi-pencil-square"></i></button>
      <button className="remove" onClick={() => removeTodo(todo.id)}><i class="bi bi-trash"></i></button>
    </div>
  </div>
  )
}

export default Todo