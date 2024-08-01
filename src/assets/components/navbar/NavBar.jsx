import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo-navbar">MyToDo</div>
      <div className="pesquisa-navbar"><input type="text" placeholder="Crie uma nota..."/></div>
    </div>
  )
}

export default NavBar