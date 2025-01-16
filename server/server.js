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
  const data = req.body.formObject;
  console.log("Data within request body:", data);
  const query = await db.query(
    `SELECT rec_price FROM routes WHERE pickup = $1 AND dropoff =$2`,
    [data.pickup, data.dropoff]
  );
  res.json(query.rows);
  console.log(query.rows);
});
