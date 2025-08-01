import React, { useEffect, useState } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [texto, setTexto] = useState('');
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setCargando(false);
      })
      .catch(() => {
        setError('Error al cargar posts');
        setCargando(false);
      });
  }, []);

  const postsFiltrados = posts.filter((post) =>
    post.title.toLowerCase().includes(texto.toLowerCase()) ||
    post.body.toLowerCase().includes(texto.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h2>Posts</h2>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Buscar por título o contenido"
        style={{ width: '250px', marginBottom: '16px' }}
      />
      {cargando && <p>Cargando posts...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {postsFiltrados.map((post) => (
          <li key={post.id} style={{ marginBottom: '18px' }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
            <span style={{ fontSize: '0.9em', color: '#888' }}>User ID: {post.userId}</span>
          </li>
        ))}
      </ul>
      {postsFiltrados.length === 0 && !cargando && <p>No se encontraron posts.</p>}
    </div>
  );
};

export default Posts;
