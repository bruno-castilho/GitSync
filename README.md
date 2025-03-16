# GitSync
*GitSync* é uma plataforma web desenvolvida para permitir aos usuários pesquisar e gerenciar repositórios do GitHub de maneira simples e eficiente. O sistema permite a exportação de repositórios do GitHub em formato CSV, a importação desses dados em segundo plano e a visualização dos repositórios em uma tabela interativa. A plataforma utiliza jobs em segundo plano para processamento de dados, com integração com RabbitMQ, garantindo desempenho, escalabilidade e uma experiência fluida ao usuário.
## Funcionalidades

### Tela 1: Busca de Usuários
- **Barra de pesquisa**: Permite que os usuários busquem por outros usuários do GitHub.
- **Exibição de resultados**: Exibe uma lista de usuários encontrados, com o nome e o avatar de cada um.
- **Redirecionamento para a Tela 2**: Ao selecionar um usuário, o usuário é redirecionado para a segunda tela, onde são exibidos os repositórios desse usuário.

### Tela 2: Exibição de Repositórios
- **Exibição de repositórios**: Mostra todos os repositórios do usuário selecionado, com informações como nome do repositório, descrição e quantidade de estrelas.
- **Exportação em CSV**: Inclui um botão para exportar todos os repositórios do usuário em formato CSV.

### Tela 3: Importação e Visualização de Repositórios
- **Importação de CSV**: Permite importar arquivos CSV contendo repositórios previamente exportados.
- **Visualização em Tabela**: Exibe uma tabela com informações dos repositórios importados, incluindo nome, proprietário e quantidade de estrelas.
- **Filtros**: Oferece filtros para refinar a visualização dos repositórios importados.
 
## Tecnologias Utilizadas
- **Frontend**: Next.js, React, Typescript
- **Backend**: NestJS, RabbitMQ, MariaDB
- **Containers**: Docker


## Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/bruno-castilho/desafio-neo-credito.git
   ```

2. Entre na pasta do projeto:
   ```bash
   cd desafio-neo-credito
   ```

3. Execute os containers:
   ```bash
   docker compose up -d
   ```

## Acessos

- **Aplicação Front-End**: Pode ser acessada em [localhost:8080](http://localhost:8080)
- **Documentação do Back-End**: A documentação da API está disponível em [localhost:8080/docs](http://localhost:8080/docs)
- **Dashboard do RabbitMQ**: Acesse a dashboard do RabbitMQ em [localhost:8080/rmq](http://localhost:8080/rmq)

## Limitação da API do GitHub

Devido à limitação de requisições da API do GitHub para usuários não autenticados, ao buscar muitos dados na aplicação, é possível que essa limitação seja atingida. Quando isso ocorrer, uma página de erro `404 - Page Not Found` será exibida.
