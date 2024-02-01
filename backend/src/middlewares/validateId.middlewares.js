import ClientRepository from "../repositories/clients.repositories.js";

const validateIdMiddleware = async (req, res, next) => {
  try {
    const { id } = req.params;
    const client = await ClientRepository.getById(id);

    if (!client)
      return res
        .status(404)
        .json({ message: "Cliente não encontrado no banco de dados." });

    res.locals.client = client;

    return next();
  } catch (error) {
    return res.status(409).json({ error: error.message });
  }
};

export default validateIdMiddleware;
