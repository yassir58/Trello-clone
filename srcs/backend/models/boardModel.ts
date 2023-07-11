import Joi from "joi";

const uuidExpr: RegExp = new RegExp(/^[0-9a-fA-F]{8}(?:-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}$/);

const boardSchema = Joi.object({
  title: Joi.string().min(5).max(100).required(),
  coverImage: Joi.string().optional(),
  description: Joi.string().optional(),
  visibilty: Joi.boolean().optional(),
  authorId: Joi.string().regex(uuidExpr).required(),
});

export default boardSchema;
