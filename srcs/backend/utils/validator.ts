import Joi, { ObjectSchema } from "joi";
import userSchema from "../models/userModel";
import listSchema from "../models/listModel";

const validator = (schema: ObjectSchema) => (payload: object) => schema.validate(payload, { abortEarly: true });

export const userValidator = validator(userSchema);
export const listValidator = validator(listSchema);