import { useState } from "react";
import "./NoteCreator.css";

function NoteCreator({ addTodo }) {
  const [value, setvalue] = useState("");
  const [description, setDescription] = useState("");

  const handeleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value, description);
    setvalue("");
    setDescription("");
    console.log(value);
  };
  return (
    <form className="note-creator-form" onSubmit={handeleSubmit}>
      <div className="input-wrapper-note">
        <i className="bi bi-plus-lg"></i>
        <input
          type="text"
          id="input-box"
          placeholder="Criar tarefa..."
          value={value}
          onChange={(e) => setvalue(e.target.value)}
        />
      </div>
    </form>
  );
}

export default NoteCreator;
