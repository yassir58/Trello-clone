import Joi, { ObjectSchema } from "joi";
import userSchema from "../models/userModel";

const validator = (schema: ObjectSchema) => (payload: object) => schema.validate(payload, { abortEarly: false });

export const userValidator = validator(userSchema);