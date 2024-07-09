import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, "Username must be at least 2 characters.")
    .max(50, "Name must be at most 50 characters"),
  email: z.string().email("Invalid Email address"),
  phone: z.string().min(10, "Invalid phone number"),
});
