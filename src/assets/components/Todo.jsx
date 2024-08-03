import "./Todo.css";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className="todo">
      <div className="header" >
        <h2 style={{textDecoration: todo.isCompletedValidation ? "line-through" : ""}}>{todo.text}</h2>
        <div className="category">{todo.isCompletedValidation ? "Concluído" : "Pendente"}</div>
      </div>
      {/* MEXER NO TAMANHO, FONTE, LIMITE DE CARACTER */}
      <div className="description">
        <textarea placeholder="Texto"></textarea>
      </div>
      <div className="mainButtons">
        <button>
          <i
            className="bi bi-check-square"
            onClick={() => completeTodo(todo.id)}
          ></i>
        </button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </div>
<<<<<<< HEAD
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
=======
  );
};
>>>>>>> 8e68e92bc4ed40a57bdb3cf3fe6335c70a4c2f3d

export default Todo;
