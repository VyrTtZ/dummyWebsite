import express from "express";
import cors from "cors";
import routes from "./routes.js"; // <-- import your router

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", routes); // <-- attach your router

// Test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
