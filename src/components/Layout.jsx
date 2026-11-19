import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="max-w-4xl mx-auto px-4 pt-32 sm:pt-24 pb-8">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;