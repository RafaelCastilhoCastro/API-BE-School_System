# Repositório da API do projeto Backend de um sistema de cadastro escolar.

:green_book: [Documentação para a API](https://documenter.getpostman.com/view/22376211/2s8Z6zyr78)

:satellite: [Link deploy Render](https://labenusystem5.onrender.com)

### Como usar
- Clone o repositório
- Rode `npm i` (ou equivalente) para instalar as dependências
- Crie um arquivo .env na raiz do projeto e preencha os parâmetros:
    - Dados do seu bando de dados
        - DB_HOST=""
        - DB_USER=""
        - DB_PASSWORD=""
        - DB_DATABASE=""
- Rode `npm run migrations` para criar as tabelas no banco de dados (MySQL).
- Teste os endpoints através do arquivo request.rest, Postman ou equivalente.

## Dependências:
- Express
- Cors
- dotenv
- Knex
- MySQL
- Typescript

## Endpoints disponiveis:
- Adicionar nova turma
- Adicionar estudante ou professor
- Buscar todos os estudantes ou professores de uma determinada turma
- Buscar estudantes com um determinado hobby
- Buscar a idade do estudante especificado
- Buscar um determinado estudante, professor ou turma
- Alterar turma do estudante ou professor
- Alterar o módulo de uma turma

---
💻 Desenvolvido por **Rafael Castro**.
