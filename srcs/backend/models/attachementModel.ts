import Joi from "joi";

const uuidExpr: RegExp = new RegExp(/^[0-9a-fA-F]{8}(?:-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}$/);

const attachementSchema = Joi.object({
  title: Joi.string().min(5).max(100).required(),
  path: Joi.string().required().max(100),
  cardId: Joi.string().regex(uuidExpr).required(),
});

export default attachementSchema;
