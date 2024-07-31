import { useState } from 'react';

import "./App.css";
import NavBar from './assets/components/navbar/NavBar';
import SideBar from './assets/components/sidebar/SideBar';
import NoteCreator from './assets/components/notecreator/NoteCreator';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [todos, setTodos] = useState([
    {
      id:1,
      text:"desgraça",
      category:"Trabalho",
      isCompleted:false,
    },
    {
      id:2,
      text:"olá mundo",
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
  return (<>
  <NavBar/>
  <SideBar/>
  <div className="maincontent">
    <NoteCreator/>
    <div className="app">
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
    </div>
  </div>
  
  </>
  )
}

export default App;
