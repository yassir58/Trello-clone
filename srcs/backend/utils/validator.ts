import Joi, { ObjectSchema } from "joi";
import userSchema from "../models/userModel";
import listSchema from "../models/listModel";
import boardSchema from "../models/boardModel";
import attachementSchema from "../models/attachementModel";

const validator = (schema: ObjectSchema) => (payload: object) => schema.validate(payload, { abortEarly: true });

export const userValidator = validator(userSchema);
export const listValidator = validator(listSchema);
export const boardValidator = validator(boardSchema);
export const attachementValidator = validator(attachementSchema);
