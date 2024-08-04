import "./NavBar.css";

const NavBar = ({ search, setSearch, darkMode, toggleDarkMode }) => {
  return (
    <div className="navbar">
      <div className="logo-navbar">
        <i class="bi bi-sticky-fill"></i>
        <h2>My<span>ToDo</span></h2>
      </div>
      <div className="search-container">
        <div className="input-wrapper">
          <i className="bi bi-search search-icon"></i>
          <input
            type="text"
            id="search-input"
            placeholder="Digite o nome de uma tarefa"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <button className="bt-navbar" onClick={toggleDarkMode}>
        <i className={`bi ${darkMode ? "bi-sun-fill" : "bi-moon-fill"}`}></i>
      </button>
    </div>
  );
};

export default NavBar;
