import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ background: '#333', padding: '10px', color: '#fff' }}>
      <Link to="/" style={{ marginRight: '10px', color: 'white' }}>Inicio</Link>
      <Link to="/productos" style={{ marginRight: '10px', color: 'white' }}>Productos</Link>
      <Link to="/usuarios" style={{ marginRight: '10px', color: 'white' }}>Usuarios</Link>
      <Link to="/posts" style={{ color: 'white' }}>Posts</Link>
    </nav>
  );
};

export default Navbar;
