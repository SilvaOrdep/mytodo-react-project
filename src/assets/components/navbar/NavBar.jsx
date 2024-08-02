import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo-navbar">MyToDo</div>
      <div className="search-container">
        <i class="bi bi-search"></i>
        <input type="text" id="search-input" placeholder="Digite o nome de uma tarefa" />
      </div>
      <button className="bt-navbar">
        
      </button>
    </div>
  );
};

export default NavBar;
