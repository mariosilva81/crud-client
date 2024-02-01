import cpfCheck from "cpf-check";

const validateBodyMiddleware = (schema) => async (req, res, next) => {
  try {
    const { cpf } = req.body;

    if (!cpfCheck.validate(cpf)) {
      return res.status(400).json({ message: "CPF inválido!" });
    }

    await schema.validateAsync(req.body);

    return next();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export default validateBodyMiddleware;
