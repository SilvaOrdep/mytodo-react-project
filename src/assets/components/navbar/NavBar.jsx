import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo-navbar">MyToDo</div>
      <div className="search-container">
        <div className="input-wrapper">
          <i className="bi bi-search search-icon"></i>
          <input
            type="text"
            id="search-input"
            placeholder="Digite o nome de uma tarefa"
          />
        </div>
      </div>
      <button className="bt-navbar">
        <i className="bi bi-moon-fill"></i>
      </button>
    </div>
  );
};

export default NavBar;
