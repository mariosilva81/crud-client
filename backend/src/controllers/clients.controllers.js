import {
  createClientService,
  getAllClientsService,
  getClientByIdService,
  updateClientService,
  deleteClientService,
} from "../services/clients.services.js";

const createClientController = async (req, res) => {
  const data = req.body;
  const createdClient = await createClientService(data);
  return res.status(201).json(createdClient);
};

const getAllClientsController = async (req, res) => {
  const allClients = await getAllClientsService();
  return res.status(200).json(allClients);
};

const getClientByIdController = async (req, res) => {
  const { id } = req.params;
  const client = await getClientByIdService(id);
  return res.status(200).json(client);
};

const updateClientController = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const updatedClient = await updateClientService(id, data);
  return res.status(200).json(updatedClient);
};

const deleteClientController = async (req, res) => {
  const { id } = req.params;
  await deleteClientService(id);
  return res.status(204).json();
};

export {
  createClientController,
  getAllClientsController,
  getClientByIdController,
  updateClientController,
  deleteClientController,
};
