import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { findUserByEmail, createUser } from "./auth.model.js";

const JWT_SECRET = "supersecret";

export const registerService = async ({ email, password }) => {
    const existingUser = await findUserByEmail(email);

    if (existingUser) {
        const err = new Error("Email already exists");
        err.statusCode = 400;
        throw err;
    }

    const hashedPassword = await hash(password, 10);

    const user = await createUser(email, hashedPassword);

    return user;
}

export const loginService = async({ email, password }) =>{
    const user = await findUserByEmail(email);

    if (!user) {
        const err = new Error("Invalid credentials");
        err.statusCode = 401;
        throw err;
    }

    const isMatch = await compare(password, user.password);

    if (!isMatch) {
        const err = new Error("Invalid credentials");
        err.statusCode = 401;
        throw err;
    }

    const token = jwt.sign(
        { id: user.id, email: user.email },
        JWT_SECRET,
        { expiresIn: "7d" }
    );

    return { token };
}