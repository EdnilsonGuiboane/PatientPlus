"use server";
import { ID, Query } from "node-appwrite";
import { parseStringify } from "../utils";
import { users } from "../appwrite.config";

// CREATE APPWRITE USER
export const createUser = async (user: CreateUserParams) => {
  try {
    const newuser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );

    return parseStringify(newuser);
  } catch (error: any) {
    // Check existing user
    if (error && error?.code === 409) {
      const document = await users.list([Query.equal("email", [user.email])]);

      return document.users[0];
    }
    console.error("Ocorreu um erro ao criar um novo usuário.:", error);
  }
};
