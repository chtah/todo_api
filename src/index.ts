import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import ITodoRepository from "./repositories/todo.repositories";
import ITodoHandler from "./handlers/todo.handler";

const client = new PrismaClient();
const PORT = Number(process.env.PORT || 8888);
const app = express();
app.use(express.json());
app.use(cors());

const todoRepo: ITodoRepository = new ITodoRepository(client);
const todoHandler: ITodoHandler = new ITodoHandler(todoRepo);

app.get("/", (req, res) => {
  return res.status(200).send("Welcome to API").end();
});

app.post("/create", todoHandler.createTodo);
app.get("/get", todoHandler.getTodo);
app.patch("/edit", todoHandler.editTodo);
app.delete("/delete", todoHandler.deleteTodo);

app.listen(PORT, () => {
  console.log(`API is up at ${PORT}`);
});
