const { z } = require('zod');

const signupSchema = z.object({
    username: z.string({ required_error: "Name is required" }).trim().min(3, { message: "Name must have at least 3 characters." }).max(255, { message: "Name must be less than 255 characters" }),
    email: z.string({ required_error: "Email is required" }).trim().email({ message: "Invalid email address" }).min(3, { message: "Email must have at least 3 characters." }).max(255, { message: "Email must be less than 255 characters" }),
    phone: z.string({ required_error: "Phone is required" }).trim().min(10, { message: "Phone must be at least 10 characters" }).max(20, { message: "Phone must not exceed 20 characters" }),
    password: z.string({ required_error: "Password is required" }).min(7, { message: "Password must be at least 7 characters" }).max(1024, { message: "Password must not exceed 1024 characters" })
})

module.exports = signupSchema;