import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';

const Home = React.lazy(() => import('@/pages/Home'));
const NotFound = React.lazy(() => import('@/pages/NotFound'));
const CreationalApp = React.lazy(() => import('@/pages//creational/CreationalApp'));
const StructuralApp = React.lazy(() => import('@/pages//structural/StructuralApp'));
const BehavioralApp = React.lazy(() => import('@/pages//behavioral/BehavioralApp'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="creational" element={<CreationalApp />} />
        <Route path="structural" element={<StructuralApp />} />
        <Route path="behavioral" element={<BehavioralApp />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;