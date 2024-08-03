import { useState, useEffect } from "react";

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
  const [search, setSearch] = useState("");

  // salvar na local storage
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("notes"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  const addTodo = (text) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        text,
        isCompletedValidation: false,
      },
    ];

    setTodos(newTodos);
    saveNotes(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
    saveNotes(filteredTodos);
  };

  // Criar fucntion de validação
  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id
        ? (todo.isCompletedValidation = !todo.isCompletedValidation)
        : todo
    );
    setTodos(newTodos);
    saveNotes(newTodos);
  };

  const saveNotes = (notes) => {
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  // filtro
  const [filter, setFilter] = useState("Todos");

  return (
    <>
      <NavBar search={search} setSearch={setSearch} />
      <div className="container">
        <SideBar filter={filter} setFilter={setFilter} />
        <div className="maincontent">
          <NoteCreator addTodo={addTodo} />
          <div className="todo-list">
            {todos
              .filter((todo) =>
                filter === "Todos"
                  ? true
                  : filter === "Concluído"
                  ? todo.isCompletedValidation
                  : !todo.isCompletedValidation
              )
              .filter((todo) =>
                todo.text.toLowerCase().includes(search.toLocaleLowerCase())
              )
              .map((todo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  removeTodo={removeTodo}
                  completeTodo={completeTodo}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;