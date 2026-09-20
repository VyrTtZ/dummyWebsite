import express from "express";
import cors from "cors";

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});


const products = [
  { id: 1, name: "Product A" },
  { id: 2, name: "Product B" },
  { id: 3, name: "Product C" },
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === Number(req.params.id));
  res.json(product || { error: "Not found" });
});

app.get("/api/dashboard/stats", (req, res) => {
  res.json({ totalProducts: products.length, totalOrders: 42 });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});