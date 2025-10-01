import React from 'react';

function Projeto({ titulo, descricao, link }) {
  return (
    <div className="projeto-card">
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Ver Projeto
      </a>
    </div>
  );
}

export default Projeto;