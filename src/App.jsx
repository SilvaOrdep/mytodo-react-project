import { useState } from "react";

import "./App.css";
import NavBar from "./assets/components/navbar/NavBar";
import SideBar from "./assets/components/sidebar/SideBar";
import NoteCreator from "./assets/components/notecreator/NoteCreator";
import Todo from "./assets/components/Todo";
// icones do bootstrap
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        text,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <SideBar />
        <div className="maincontent">
          <NoteCreator addTodo={addTodo} />
          <div className="todo-list">
            {todos.map((todo) => (
              <Todo key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
