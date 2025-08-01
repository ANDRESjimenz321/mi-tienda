import React, { useEffect, useState } from 'react';
import Card from './Card';
import './ProducList.css';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.webp';

const ProducList = () => {
  const [productos, setProductos] = useState([]);
  const [asc, setAsc] = useState(true);

  useEffect(() => {
    const fakeData = [
      {
        id: 1,
        nombre: 'Disfraz de Dino',
        precio: 100000,
        imagen: img1,
        descripcion: ''
      },
      {
        id: 2,
        nombre: 'Arnes para gallina',
        precio: 20000,
        imagen: img2,
        descripcion: ''
      },
      {
        id: 3,
        nombre: 'Alcancia',
        precio: 15000,
        imagen: img3,
        descripcion: ''
      },
      {
        id: 4,
        nombre: 'Ardilla para Dedos',
        precio: 25000,
        imagen: img4,
        descripcion: ''
      },
      {
        id: 5,
        nombre: 'Led para sanitario',
        precio: 45000,
        imagen: img5,
        descripcion: ''
      },
    ];
    setTimeout(() => setProductos(fakeData), 1000);
  }, []);

  // Ordenar productos por precio
  const productosOrdenados = [...productos].sort((a, b) =>
    asc ? a.precio - b.precio : b.precio - a.precio
  );

  return (
    <div className="product-list">
      <h2>Lista de Productos</h2>
      <button onClick={() => setAsc(!asc)} style={{ marginBottom: '10px' }}>
        Ordenar por precio: {asc ? 'Ascendente' : 'Descendente'}
      </button>
      {productos.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="product-container">
          {productosOrdenados.map((p) => (
            <Card
              key={p.id}
              nombre={p.nombre}
              precio={p.precio}
              imagen={p.imagen}
              descripcion={p.descripcion}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProducList;
