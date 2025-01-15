import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

export const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});

app.get("/", (req, res) => {
  res.json("Test on root");
});

app.get("/retrieve", async (req, res) => {
  try {
    const query = await db.query(`SELECT * FROM routes`);
    res.json(query.rows);
    console.log(query.rows);
  } catch (error) {
    console.error("Query failed :(", error);
    res.status(500).json({ error: "Server error" });
  }
});
