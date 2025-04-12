"use server";

import { createUser } from "@/lib/user";

export async function signUp(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  let errors = {};

  if (!email.includes("@")) {
    errors.email = "Invalid email, Email must contain @ symbol.";
  }

  if (password.length < 8) {
    errors.password = "Password must be 8 characters long.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }

  createUser(email, password)
}
