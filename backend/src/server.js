import "dotenv/config";
import express from "express";
import cors from "cors";
import clientsRoute from "./routes/clients.routes.js";
import { connectDatabase } from "./database.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/clients", clientsRoute);

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  console.log(`Servidor rodando em http://localhost:${port}.`);
  connectDatabase();
});
