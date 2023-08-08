import { ObjectSchema } from "joi";

import cardSchema from "../models/cardModel";
import userSchema from "../models/userModel";
import listSchema from "../models/listModel";
import { boardUpdateSchema, boardSchema } from "../models/boardModel";
import labelSchema from "../models/labelModel";
import inviteSchema from "../models/inviteModel";
import commentSchema from "../models/commentModel";
import attachementSchema from "../models/attachementModel";
import { checklistSchema, taskSchema } from "../models/checklistModel";

const validator = (schema: ObjectSchema) => (payload: object) => schema.validate(payload, { abortEarly: true });

export const userValidator = validator(userSchema);
export const listValidator = validator(listSchema);
export const boardValidator = validator(boardSchema);
export const boardUpdateValidator = validator(boardUpdateSchema);
export const attachementValidator = validator(attachementSchema);
export const commentValidator = validator(commentSchema);
export const labelValidator = validator(labelSchema);
export const cardValidator = validator(cardSchema);
export const inviteValidator = validator(inviteSchema);
export const checklistValidor = validator(checklistSchema);
export const taskValidator = validator(taskSchema);
