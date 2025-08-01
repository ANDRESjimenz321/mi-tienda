import React from 'react';
import './Card.css';

const Card = ({ nombre, precio, imagen, descripcion }) => {
  return (
    <div className="card">
      {imagen && (
        <img src={imagen} alt={nombre} style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '6px 6px 0 0' }} />
      )}
      <h3>{nombre}</h3>
      <p>Precio: ${precio}</p>
      <div style={{ minHeight: '40px', marginTop: '8px', color: '#555' }}>
        {descripcion || <em>Agrega una descripción aquí...</em>}
      </div>
    </div>
  );
};

export default Card;
