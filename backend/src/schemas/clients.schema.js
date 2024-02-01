import Joi from "joi";

const clientSchema = Joi.object({
  id: Joi.number(),
  name: Joi.string()
    .min(1)
    .pattern(new RegExp(/^[a-zA-ZÀ-ú ]+$/))
    .required(),
  birthdate: Joi.string().min(1).required(),
  cpf: Joi.string().min(1).max(14).required(),
  phone: Joi.string().min(1).required(),
  email: Joi.string().email().min(1).required(),
  address: Joi.string().min(1).required(),
  note: Joi.string().max(300).allow(""),
}).options({ abortEarly: false });

export default clientSchema;
