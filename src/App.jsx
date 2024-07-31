import { useState } from 'react';
import "./App.css";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [todos, setTodos] = useState([
    {
      id:1,
      text:"canso",
      category:"Trabalho",
      isCompleted:false,
    },
    {
      id:2,
      text:"canso ruim",
      category:"Estudo",
      isCompleted:false,
    },
    {
      id:3,
      text:"Lula",
      category:"Pessoal",
      isCompleted:true,
    },


  ])
  return <div className="app">
    <h1>Lista de Tarefas</h1>
    <div className="todo-list">
      {todos.map((todo)=>(
        // eslint-disable-next-line react/jsx-key
        <div className="todo">
          <div className="content">
            <p>{todo.text} </p>
            <p className="category">({todo.category})</p>
          </div>
          <div>
            <button>completar</button>
            <button>editar</button>
            <button>apagar</button>
          </div>
        </div>
      ))}
    </div>
  </div>;
}

export default App;
