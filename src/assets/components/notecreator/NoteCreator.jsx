import { useState } from "react";
import "./NoteCreator.css";

function NoteCreator({ addTodo }) {
  const [value, setvalue] = useState("");

  const handeleSubmit = (e) => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setvalue("");
    console.log(value);
  };
  return (
    // <div className="inputBox"><input type="text" placeholder="Crie uma nota..."/></div>

    // 2 op

    // <form className="row" onSubmit={handeleSubmit}>
    //   <i class="bi bi-plus-lg"></i>
    //   <input
    //     type="text"
    //     id="input-box"
    //     placeholder="Add your text"
    //     value={value}
    //     onChange={(e) => setvalue(e.target.value)}
    //   />
    // </form>

    <form className="note-creator-form" onSubmit={handeleSubmit}>
      <div className="input-wrapper-note">
        <i className="bi bi-plus-lg"></i>
        <input
          type="text"
          id="input-box"
          placeholder="Criar tarefa"
          value={value}
          onChange={(e) => setvalue(e.target.value)}
        />
      </div>
    </form>
  );
}

export default NoteCreator;
