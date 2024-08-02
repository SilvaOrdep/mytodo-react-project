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
    <form className="row" onSubmit={handeleSubmit}>
      <input
        type="text"
        id="input-box"
        placeholder="Add your text"
        value={value}
        onChange={(e) => setvalue(e.target.value)}
      />
      <button className="bt-note">Add</button>
    </form>
  );
}

export default NoteCreator;
