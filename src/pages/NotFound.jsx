import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div style={{ padding: 20 }}>
    <h2>404 - Page Not Found</h2>
    <Link to="/">Back to Home</Link>
  </div>
);

export default NotFound;
