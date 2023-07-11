import Joi from "joi";

const userSchema = Joi.object({
  userName: Joi.string().min(5).required(),
  email: Joi.string().email().required(),
  profileImage: Joi.string().optional(),
});

export default userSchema;