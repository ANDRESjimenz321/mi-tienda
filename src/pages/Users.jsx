import React, { useEffect, useState } from 'react';

const Users = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [texto, setTexto] = useState('');
  const [atributo, setAtributo] = useState('name');
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsuarios(data);
        setCargando(false);
      })
      .catch(() => {
        setError('Error al cargar usuarios');
        setCargando(false);
      });
  }, []);

  const usuariosFiltrados = usuarios.filter((usuario) => {
    let valor = '';
    if (atributo === 'name') valor = usuario.name;
    else if (atributo === 'username') valor = usuario.username;
    else if (atributo === 'email') valor = usuario.email;
    else if (atributo === 'city') valor = usuario.address.city;
    return valor.toLowerCase().includes(texto.toLowerCase());
  });

  return (
    <div style={{ padding: '20px' }}>
      <h2>Usuarios</h2>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="atributo">Filtrar por: </label>
        <select
          id="atributo"
          value={atributo}
          onChange={(e) => setAtributo(e.target.value)}
          style={{ marginRight: '10px' }}
        >
          <option value="name">Nombre</option>
          <option value="username">Usuario</option>
          <option value="email">Email</option>
          <option value="city">Ciudad</option>
        </select>
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder={`Buscar por ${
            atributo === 'name' ? 'nombre' :
            atributo === 'username' ? 'usuario' :
            atributo === 'email' ? 'email' : 'ciudad'}`}
          style={{ width: '200px' }}
        />
      </div>
      {cargando && <p>Cargando usuarios...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {usuariosFiltrados.map((usuario) => (
          <li key={usuario.id} style={{ marginBottom: '12px' }}>
            <strong>{usuario.name}</strong> <br />
            <span>Usuario: {usuario.username}</span> <br />
            <span>Email: {usuario.email}</span> <br />
            <span>Ciudad: {usuario.address.city}</span>
          </li>
        ))}
      </ul>
      {usuariosFiltrados.length === 0 && !cargando && <p>No se encontraron usuarios.</p>}
    </div>
  );
};

export default Users;
