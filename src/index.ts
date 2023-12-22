import express from "express";
import { PrismaClient } from "@prisma/client";

const clnt = new PrismaClient();
const PORT = Number(process.env.PORT || 8888);
const app = express();

app.get("/", (req, res) => {
  return res.status(200).send("Welcome to API").end();
});

app.listen(PORT, () => {
  console.log(`API is up at ${PORT}`);
});
