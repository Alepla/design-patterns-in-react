import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/">🏠 Home</Link> | <Link to="/creational">⚒️ Creational</Link> |{' '}
        <Link to="/structural">🏗️ Structural</Link> | <Link to="/behavioral">🤝 Behavioral</Link>
      </nav>

      <React.Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </React.Suspense>
    </div>
  );
};

export default Layout;
