import NextAuth from "next-auth";
import { Enum_RoleName } from "@prisma/client";

declare module "next-auth" {
  
  interface Session {
    user: {
      email: string;
      name: string;
      image: string;
      role?: Enum_RoleName;
    };
  }
}
