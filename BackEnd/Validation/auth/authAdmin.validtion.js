import Joi from "joi";

export const loginSchema = Joi.object({
  email: Joi.string().required().trim(),
  password: Joi.string().min(6).required(),
});
