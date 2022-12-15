import express from "express";
import {} from "dotenv/config";

import productRoutes from "./routes/products.js";
import connectDB from "./db/conn.js";
const app = express();
connectDB();
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("hello api is live");
});

// middleware
app.use("/api/products", productRoutes);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`server  is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
