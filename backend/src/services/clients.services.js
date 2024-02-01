import ClientRepository from "../repositories/clients.repositories.js";

const createClientService = async (data) => {
  const client = await ClientRepository.create(data);
  return client;
};

const getAllClientsService = async () => {
  const allClients = await ClientRepository.getAll();
  return allClients;
};

const getClientByIdService = async (id) => {
  const client = await ClientRepository.getById(id);
  return client;
};

const updateClientService = async (id, data) => {
  const updatedClient = await ClientRepository.update(id, data);
  return updatedClient;
};

const deleteClientService = async (id) => {
  await ClientRepository.delete(id);
};

export {
  createClientService,
  getAllClientsService,
  getClientByIdService,
  updateClientService,
  deleteClientService,
};
