import "./SideBar.css";

const Sidebar = ({filter, setFilter}) => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Filtrar:</h2>
      <div className="filter">
        <label htmlFor="status" className="filter-label">Status</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)} id="status" className="filter-select">
          <option value="Todos">Todos</option>
          <option value="Concluído">Concluído</option>
          <option value="Pendente">Pendente</option>
        </select>
      </div>
    </div>
  );
};

export default Sidebar