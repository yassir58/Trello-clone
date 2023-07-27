import Joi from "joi";

const uuidExpr: RegExp = new RegExp(/^[0-9a-fA-F]{8}(?:-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}$/);

export const checklistSchema = Joi.object({
  name: Joi.string().min(5).max(80).required(),
  cardId: Joi.string().regex(uuidExpr).required(),
});

export const taskSchema = Joi.object({
  content: Joi.string().min(5).max(80).required(),
  checkListId: Joi.string().regex(uuidExpr).required(),
  resolved: Joi.boolean().optional(),
});
