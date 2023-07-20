import { Request } from "express";

type User = {
  id: string;
  fullname: string;
  email: string;
  profileImage: string;
  password: string;
};

declare global {
  namespace Express {
    interface Request {
      user: User;
    }
  }
}
