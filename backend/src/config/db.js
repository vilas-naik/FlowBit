import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

let connection;

export const connectDB = async () => {
  try {
    connection = await mysql.createConnection(
      process.env.DATABASE_URL
    );

    console.log("MySQL connected");
  } catch (error) {
    console.error("DB connection failed:", error.message);
    process.exit(1);
  }
};

export const getDB = () => connection;