import express from "express";
import jwt from "jsonwebtoken";
import cors from "cors";
import routes from "./routes.js";
import pool from "./backend/config/db.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/", routes);

app.get('/test', (req, res) => {
  pool.query('INSERT INTO usersdummywebpage (userID, userName, userEmail, userPassword) VALUES (?, ?, ?, ?)', 
    ['123', 'Tom B. Erichsen', '123@123', 'secret'], (err, results) => {
    if (err) throw err;
    console.log("Insertion successful:", results);
  });
  pool.query('SELECT * FROM usersdummywebpage', (err, results) => {
    if (err) throw err;
    res.json(results);
    console.log("Database connection successful, query result:", results);
  });
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
