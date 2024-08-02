// src/components/Library.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Library.css'; // Importe um arquivo CSS para estilização
import { getLibrary } from './libraryUtils';

const Library: React.FC = () => {
  const [library, setLibrary] = useState<any[]>([]);

  useEffect(() => {
    setLibrary(getLibrary());
  }, []);

  return (
    <div className="library">
      <h2>Biblioteca</h2>
      {library.length === 0 ? (
        <p>Você ainda não adicionou nenhum mangá à biblioteca.</p>
      ) : (
        <div className="manga-grid">
          {library.map(manga => (
            <div key={manga.id} className="manga-card">
              <img src={manga.coverUrl} alt={manga.title} className="manga-cover" />
              <h3>{manga.title}</h3>
              <Link to={`/manga/${manga.id}`} className="details-link">Ver Detalhes</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Library;