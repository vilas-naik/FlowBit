import { getDB } from "../../config/db.js";


export const findUserByEmail = async (email) => {
    const db = getDB()
    const [rows] = await db.query(
        "SELECT * FROM users WHERE email = ?",
        [email]
    );
    return rows[0] || null;
}

export const createUser = async (email, password) => {
    const db = getDB()
    const [result] = await db.query(
        "INSERT INTO users (email, password) VALUES (?, ?)",
        [email, password]
    );

    return {
        id: result.insertId,
        email,
    };
}