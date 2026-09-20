import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import routes from "./routes.js";

dotenv.config();

const app = express();
const PORT = 8000;


const client = new MongoClient(process.env.MONGODB_URI);
let db;

async function connectDB() {
  await client.connect();
  db = client.db("dummyWebsiteDB"); // set DB_NAME in .env if needed
  console.log("Connected to MongoDB");
}


app.use((req, res, next) => {
  req.db = db;
  next();
});


app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/api", routes);


app.get("/test", async (req, res) => {
  try {
    const docs = await db.collection("myCollection").find({}).toArray();
    res.json(docs);
  } catch (err) {
    console.error("Query failed:", err);
    res.status(500).json({ error: "Database query failed" });
  }
});

// --- Start server after DB connects ---
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  });