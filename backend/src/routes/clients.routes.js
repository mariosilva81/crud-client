import express from "express";
import clientSchema from "../schemas/clients.schema.js";
import validateIdMiddleware from "../middlewares/validateId.middlewares.js";
import validateBodyMiddleware from "../middlewares/validateBody.middlewares.js";
import {
  createClientController,
  getAllClientsController,
  getClientByIdController,
  updateClientController,
  deleteClientController,
} from "../controllers/clients.controllers.js";

const clientsRoute = express.Router();

clientsRoute.post(
  "/",
  validateBodyMiddleware(clientSchema),
  createClientController
);

clientsRoute.get("/", getAllClientsController);

clientsRoute.get("/:id", validateIdMiddleware, getClientByIdController);

clientsRoute.put(
  "/:id",
  validateIdMiddleware,
  validateBodyMiddleware(clientSchema),
  updateClientController
);

clientsRoute.delete("/:id", validateIdMiddleware, deleteClientController);

export default clientsRoute;
