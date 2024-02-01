# Aplicação React (front-end) e Express (back-end) - CRUD de Clientes

Este é um projeto concebido para aplicação em um teste prático full stack que utiliza React no front-end e Express no back-end para realizar operações CRUD (Create, Read, Update, Delete) de clientes utilizando SQL nativo. O SGBD PostgreSQL é utilizado para armazenar e gerenciar os dados dos clientes no banco de dados.

## Pré-requisitos

Certifique-se de ter os seguintes softwares instalados em sua máquina antes de iniciar:

- Node.js
- npm (gerenciador de pacotes Node.js)
- PostgreSQL

## Configuração do Banco de Dados

1. Crie um banco de dados no PostgreSQL para a aplicação.
2. Dentro da pasta `backend`, copie o arquivo `.env.example` para um novo arquivo chamado `.env` e configure as variáveis de ambiente relacionadas ao banco de dados.

```env
DB_USER=seu_usuario
DB_HOST=localhost
DB_NAME=nome_do_banco
DB_PASS=sua_senha
DB_PORT=5432
PORT=3000
```

Não há necessidade de criar nenhuma tabela, pois a aplicação criará automaticamente ao iniciar.

## Instalação

### Backend

1. Navegue até a pasta `backend`:

```bash
cd backend
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor backend:

```bash
# desenvolvimento
npm run dev

#ou

#produção
npm run start
```

O servidor estará disponível em `http://localhost:3000`.

Verifique o arquivo `insomnia.json` disponibilizado na raiz do projeto. Nele estão contidas todas as rotas e métodos HTTP disponíveis na aplicação, que pode ser importado no Insomnia ou qualquer outro client HTTP, para realizar requisições.

### Frontend

1. Navegue até a pasta `frontend`:

```bash
cd frontend
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor:

```bash
# desenvolvimento
npm run dev

#ou

#produção
npm run build
```

A aplicação estará disponível em `http://localhost:5173`.