import { RequestHandler } from "express";
import ITodoRepository from "../repositories/todo.repositories";
import { IMessageDTO, ITodoDTO } from "../dto/todo.dto";
import {
  ICreateTodo,
  IDeleteTodo,
  IUpdateTodo,
} from "../interfaces/todo.interface";

export default class ITodoHandler implements ITodoHandler {
  constructor(private repo: ITodoRepository) {}
  public createTodo: RequestHandler<{}, ITodoDTO | IMessageDTO, ICreateTodo> =
    async (req, res) => {
      try {
        const { todo_list, date } = req.body;

        const result = await this.repo.create({
          todo_list,
          date,
        });
        return res.status(201).json(result).end();
      } catch (error) {
        return res.status(500).json({ message: `Error ${error}` });
      }
    };

  public getTodo: RequestHandler<{}, ITodoDTO[] | IMessageDTO> = async (
    req,
    res
  ) => {
    try {
      const result = await this.repo.get();
      return res.status(200).json(result).end();
    } catch (error) {
      return res.status(500).json({ message: `Error ${error}` });
    }
  };

  public editTodo: RequestHandler<{}, ITodoDTO | IMessageDTO, ITodoDTO> =
    async (req, res) => {
      try {
        const { id, todo_list, date, isDone } = req.body;
        const result = await this.repo.edit({
          id: id,
          todo_list: todo_list,
          date: date,
          isDone: isDone,
        });
        return res.status(200).json(result).end();
      } catch (error) {
        return res.status(500).json({ message: `Error ${error}` });
      }
    };

  public deleteTodo: RequestHandler<{}, ITodoDTO | IMessageDTO, IDeleteTodo> =
    async (req, res) => {
      try {
        const { id } = req.body;
        const result = await this.repo.delete(id);
        return res.status(200).json(result).end();
      } catch (error) {
        return res.status(500).json({ message: `Error ${error}` });
      }
    };
}
