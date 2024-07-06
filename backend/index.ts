import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

app.listen(() => {
  console.log("Server is listening in PORT - ", PORT);
});
