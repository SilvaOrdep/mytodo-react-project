import "./Todo.css";

const Todo = ({ todo }) => {
  return (
  <div className="todo">
    <div className="header">
      <h2>{todo.text}</h2>
      <div className="category">(trabalho)</div>
    </div>
    <div className="description">
      <p>dival é viado dival é viado dival é viado dival é viado dival é viado dival é viado dival é viado dival é viado dival é viado dival é viado dival é viado dival é viado dival é viado dival é viado dival é viado dival é viado dival é viado dival é viado dival é viado dival é viado dival é viado dival é viado </p>
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