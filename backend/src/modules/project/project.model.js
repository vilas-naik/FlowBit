import { getDB } from "../../config/db.js";

export const createProject = async (name, description) => {
    try {
        const db = getDB();

        const query = `
      INSERT INTO projects (name, description)
      VALUES (?, ?)
    `;
        const [result] = await db.execute(query, [name, description]);
        return result;
    }
    catch (error) {
        throw error
    }
}

export const getAllProjects = async () => {
    const db = getDB();
    const [rows] = await db.query(`SELECT * FROM projects`)
    return rows
}


export const getProjectById = async (id) => {
    const db = getDB();
    const [rows] = await db.query(`SELECT * FROM projects WHERE id = ?`, [id])
    return rows[0] || null
}