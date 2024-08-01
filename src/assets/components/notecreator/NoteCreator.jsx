import "./NoteCreator.css";

function NoteCreator() {
  return (
    // <div className="inputBox"><input type="text" placeholder="Crie uma nota..."/></div>
    <div className="row">
      <input type="text" id="input-box" placeholder="Add your text" />
      <button className="bt-note">Add</button>
    </div>
  );
}

export default NoteCreator;
