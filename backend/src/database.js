import pkg from "pg";
const { Client } = pkg;

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

const createTable = async () => {
  try {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS clients (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        birthdate VARCHAR(10) NOT NULL,
        cpf VARCHAR(14) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        email VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        note VARCHAR(300)
      );`;

    await client.query(createTableQuery);
    console.log("Tabela 'clients' criada com sucesso.");
  } catch (error) {
    console.error("Erro ao criar a tabela 'clients':", error);
  }
};

const connectDatabase = async () => {
  try {
    await client.connect();
    console.log("Conectado ao banco de dados.");
    await createTable();
  } catch (error) {
    console.error("Erro ao criar a tabela 'clients':", error);
  }
};

export { client, connectDatabase };
