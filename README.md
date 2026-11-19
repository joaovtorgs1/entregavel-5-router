# Entregável 5 - React Router e SPA

App multi-página (SPA) feita com React Router e Tailwind CSS responsivo.

## Funcionalidades

- Configuração com BrowserRouter, Routes e Route (Parte 1)
- Páginas Home, Listagem e Detalhes (Parte 2)
- NavBar fixa e responsiva com NavLink, que destaca a rota ativa (Parte 2)
- Layout padrão com Outlet (Parte 2)
- Rota dinâmica /item/:id com useParams (Parte 3)

## Como rodar

    npm install
    npm run dev

## Reflexão

**Qual a diferença entre o roteamento tradicional do HTML (vários arquivos .html) e o roteamento de uma SPA (Single Page Application) com React Router?**

No roteamento tradicional, cada página é um arquivo .html separado no servidor. Ao clicar em um link, o navegador faz uma nova requisição, baixa o HTML completo da outra página e recarrega tudo, inclusive CSS e JavaScript. Isso causa uma piscada na tela e perde o estado da aplicação.

Em uma SPA com React Router, o navegador carrega um único HTML uma vez. Quando o usuário clica em um link, o React Router intercepta a navegação, muda a URL usando a History API e renderiza apenas o componente da rota correspondente, sem recarregar a página. Por isso a navegação é mais rápida e fluida, o estado pode ser mantido e partes comuns, como a NavBar, são reaproveitadas pelo Layout com Outlet. Além disso, rotas dinâmicas como /item/:id permitem reutilizar uma mesma página para vários conteúdos, lendo o parâmetro da URL com useParams.