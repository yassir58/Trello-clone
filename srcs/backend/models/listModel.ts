/// ^[0-9a-fA-F]{8}(?:-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}$

import Joi from "joi";

const listSchema = Joi.object({
  name: Joi.string().min(5).required(),
  boardId: Joi.string()
    .regex(/^[0-9a-fA-F]{8}(?:-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}$/)
    .required(),
});

export default listSchema;
