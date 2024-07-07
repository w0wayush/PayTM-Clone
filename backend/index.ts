import express from "express";
import dotenv from "dotenv";
import rootRouter from "./routes/index";
import dbConnect from "./config/db";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.use("/api/v1", rootRouter);

dbConnect();

app.get("/", (req, res) => {
  res.send("<h1>Payment server working properly</h1>");
});

app.listen(PORT, () => {
  console.log("Server is listening in PORT - ", PORT);
});
