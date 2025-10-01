import React from 'react';
import Projeto from './Projeto'; // Importamos o componente filho


const projetos = [
  {
    titulo: 'Calculadora de IMC',
    descricao: 'Uma calculadora simples feita com React para calcular o Índice de Massa Corporal.',
    link: 'https://github.com/seu-usuario/calculadora-imc'
  },
  {
    titulo: 'App de Lista de Tarefas',
    descricao: 'Um clássico To-Do List para gerenciar tarefas diárias, com funcionalidades de adicionar e remover itens.',
    link: 'https://github.com/seu-usuario/todo-list'
  },
  {
    titulo: 'Site Institucional',
    descricao: 'Página de apresentação estática para uma empresa fictícia, focada em CSS moderno e responsividade.',
    link: 'https://github.com/seu-usuario/site-empresa'
  }
];

function ListaProjetos() {
  return (
    <section className="projetos">
      <h2>Meus Projetos</h2>
      <div className="projetos-grid">
        {projetos.map((projeto, index) => (
          <Projeto
            key={index} // Chave é importante para o React otimizar a renderização de listas
            titulo={projeto.titulo}
            descricao={projeto.descricao}
            link={projeto.link}
          />
        ))}
      </div>
    </section>
  );
}

export default ListaProjetos;