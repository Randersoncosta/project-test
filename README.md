Projeto Prático: Construindo um Portfólio Pessoal com React
🎯 Objetivo do Projeto
O objetivo deste projeto é construir uma página de portfólio pessoal de uma única página (Single Page Application) utilizando React. Ao final, você terá um site funcional para exibir seus projetos e terá praticado conceitos fundamentais da biblioteca React, como componentização, props e renderização de listas.

📖 Visão Geral da Tarefa
Você deverá criar uma aplicação React que exiba as seguintes seções:

Cabeçalho (Header): Uma seção no topo da página com seu nome e sua profissão ou área de estudo (ex: "Desenvolvedor(a) Web").

Sobre Mim (Sobre): Um pequeno parágrafo se apresentando.

Meus Projetos (Projetos): Uma galeria com cards que mostram os projetos que você desenvolveu. Esta seção deve ser dinâmica, carregando os dados de um array.

Rodapé (Footer): Uma pequena seção na parte inferior da página com informações de copyright ou redes sociais.

🧠 Conceitos que Serão Praticados
Criação e Organização de Componentes: Estruturar a aplicação em componentes lógicos e reutilizáveis.

Componentes Funcionais: Criar componentes usando a sintaxe de funções do JavaScript.

JSX: Escrever a estrutura da sua interface de usuário de forma declarativa.

Props: Passar dados de um componente "pai" para um componente "filho".

Renderização de Listas: Usar a função .map() para renderizar uma lista de componentes a partir de um array de dados.

Estilização: Aplicar estilos CSS para criar um layout agradável e funcional.

✅ Requisitos do Projeto
Para que o projeto seja considerado completo, ele deve atender aos seguintes requisitos:

Estrutura de Arquivos:

Crie uma pasta src/components para organizar todos os seus componentes.

O componente principal App.js deve ser responsável por montar o layout da página.

Criação dos Componentes:

Header.js: Componente para o cabeçalho.

Sobre.js: Componente para a seção "Sobre Mim".

Footer.js: Componente para o rodapé.

Projeto.js: Um componente reutilizável que representa um único card de projeto. Ele deve receber, via props, as informações do projeto (ex: titulo, descricao, link).

ListaProjetos.js: Um componente que contém um array de objetos (seus projetos). Ele deve usar o método .map() para renderizar vários componentes <Projeto />, passando os dados de cada projeto via props.

Funcionalidade:

A lista de projetos deve ser renderizada dinamicamente. Ao alterar o array de dados no componente ListaProjetos.js, a página deve refletir a mudança automaticamente.

Estilização:

Adicione CSS no arquivo App.css para estilizar todos os componentes, criando um layout visualmente organizado.

👣 Passos Sugeridos
Configuração Inicial: Use o create-react-app para iniciar um novo projeto React.

Limpeza: Limpe os arquivos App.js e App.css para começar do zero.

Criação da Estrutura: Crie a pasta src/components e os arquivos vazios para cada um dos componentes listados nos requisitos.

Componentes Estáticos: Comece implementando os componentes mais simples primeiro: Header.js, Sobre.js e Footer.js.

Componente Reutilizável: Crie o Projeto.js, fazendo com que ele exiba dados estáticos inicialmente. Em seguida, substitua os dados estáticos por props.

Componente "Pai": Desenvolva o ListaProjetos.js. Crie o array de dados e implemente a lógica do .map() para renderizar os componentes Projeto.js.

Montagem Final: No App.js, importe e posicione todos os componentes que você criou para montar a página final.

Estilização: Com a estrutura pronta, foque em estilizar a aplicação no App.css.

🏆 Desafios (Bônus)
Se você terminar os requisitos principais, tente implementar uma ou mais das seguintes funcionalidades:

Adicionar Imagens: Modifique o componente Projeto.js para aceitar uma prop com a URL de uma imagem e exibi-la no card.

Criar um Componente de Contato: Crie um novo componente com links para seu GitHub, LinkedIn, etc.

Tornar Responsivo: Use Media Queries no seu CSS para garantir que o layout se adapte bem a telas de celular.

Deploy: Publique seu site gratuitamente usando serviços como Netlify ou Vercel.

Boa sorte e divirta-se codificando!