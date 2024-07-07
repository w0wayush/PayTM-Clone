import express from "express";
import dotenv from "dotenv";
import mainRouter from "./routes/index";
import dbConnect from "./config/db";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(bodyParser());
app.use(cors());

dbConnect();

app.use("/api/v1", mainRouter);

app.listen(() => {
  console.log("Server is listening in PORT - ", PORT);
});
