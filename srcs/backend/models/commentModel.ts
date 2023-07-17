import Joi from "joi";

const uuidExpr: RegExp = new RegExp(/^[0-9a-fA-F]{8}(?:-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}$/);

const commentSchema = Joi.object({
  content: Joi.string().min(5).max(500).required(),
  cardId: Joi.string().regex(uuidExpr),
  userId: Joi.string().regex(uuidExpr).required(),
});

export default commentSchema;