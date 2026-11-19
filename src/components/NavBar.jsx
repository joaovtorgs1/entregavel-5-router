import { NavLink } from 'react-router-dom';

function NavBar() {
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm sm:text-base font-medium transition-colors ${
      isActive
        ? 'bg-blue-600 text-white'
        : 'text-gray-700 hover:bg-gray-200'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <span className="text-xl font-bold text-gray-900">Meu Site SPA</span>
        <div className="flex gap-2">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/listagem" className={linkClass}>
            Listagem
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;