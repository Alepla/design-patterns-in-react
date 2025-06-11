import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const Home = React.lazy(() => import('@/pages/Home'));
const CreationalApp = React.lazy(() => import('@/creational/CreationalApp'));
const StructuralApp = React.lazy(() => import('@/structural/StructuralApp'));
const BehavioralApp = React.lazy(() => import('@/behavioral/BehavioralApp'));

const App = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/">🏠 Home</Link> | <Link to="/creational">⚒️ Creational</Link> |{' '}
        <Link to="/structural">🏗️ Structural</Link> | <Link to="/behavioral">🤝 Behavioral</Link>
      </nav>

      <React.Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/creational" element={<CreationalApp />} />
          <Route path="/structural" element={<StructuralApp />} />
          <Route path="/behavioral" element={<BehavioralApp />} />
        </Routes>
      </React.Suspense>
    </div>
  );
};

export default App;