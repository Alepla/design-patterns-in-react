import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div style={{ padding: 20 }}>
    <h1>React Design Patterns</h1>
    <ul>
      <li><Link to="/creational">Creational Patterns</Link></li>
      <li><Link to="/structural">Structural Patterns</Link></li>
      <li><Link to="/behavioral">Behavioral Patterns</Link></li>
    </ul>
  </div>
);

export default Home;
