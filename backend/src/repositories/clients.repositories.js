import format from "pg-format";
import { client } from "../database.js";

class ClientRepository {
  async create(data) {
    const queryString = format(
      `
      INSERT INTO clients
        (%I) 
      VALUES
        (%L) 
      RETURNING *;`,
      Object.keys(data),
      Object.values(data)
    );

    try {
      const result = await client.query(queryString);
      return result.rows[0];
    } catch (error) {
      console.log(error);
    }
  }

  async getAll() {
    const query = "SELECT * FROM clients;";

    try {
      const result = await client.query(query);
      return result.rows;
    } catch (error) {
      console.error(error);
    }
  }

  async getById(id) {
    const query = "SELECT * FROM clients WHERE id = $1;";

    try {
      const result = await client.query(query, [id]);
      return result.rows[0];
    } catch (error) {
      console.error(error);
    }
  }

  async getByEmail(id) {
    const query = "SELECT * FROM clients WHERE email = $1;";

    try {
      const result = await client.query(query, [id]);
      return result.rows[0];
    } catch (error) {
      console.error(error);
    }
  }

  async update(id, data) {
    const queryTemplate = format(
      `
      UPDATE clients
      SET 
        (%I) = (%L)
      WHERE 
        id = $1
      RETURNING *;`,
      Object.keys(data),
      Object.values(data)
    );

    const queryConfig = {
      text: queryTemplate,
      values: [id],
    };

    try {
      const result = await client.query(queryConfig);
      return result.rows[0];
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id) {
    const query = "DELETE FROM clients WHERE id = $1 RETURNING *;";

    try {
      await client.query(query, [id]);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ClientRepository();
