import { Request } from "express";

type User = {
  id: string;
  fullname: string;
  email: string;
  profileImage: string | null;
  passwordChangedAt: Date | null;
};

declare global {
  namespace Express {
    interface Request {
      user: User;
    }
  }
}
