import "./Todo.css";

const Todo = ({ todo }) => {
  return (
  <div className="todo">
    <div className="header">
      <h2>{todo.text} </h2>
      <div className="category">({todo.category})</div>
    </div>
    <div className="description">
      <p>descrição (a desenvolver)</p>
    </div>
    <div className="mainButtons">
      <button><i class="bi bi-check-square"></i></button>
      <button><i class="bi bi-pencil-square"></i></button>
      <button><i class="bi bi-trash"></i></button>
    </div>
  </div>
  )
}

export default Todo