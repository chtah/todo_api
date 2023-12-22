import { RequestHandler } from "express";
import { IMessageDTO, ITodoDTO } from "../dto/todo.dto";

export interface ITodo {
  id: number;
  todo_list: string;
  date: Date;
  isDone: boolean;
}

export interface ICreateTodo {
  todo_list: string;
  date: Date;
}

export interface IUpdateTodo {
  id: number;
  todo_list?: string;
  date?: Date;
  isDone?: boolean;
}

export interface IDeleteTodo {
  id: number;
}

export interface ITodoRepository {
  create(todo: ICreateTodo): Promise<ITodoDTO>;
  get(): Promise<ITodoDTO[]>;
  edit(todo: IUpdateTodo): Promise<ITodoDTO>;
  delete(id: string): Promise<ITodoDTO>;
}

export interface ITodoHandler {
  createTodo: RequestHandler<{}, ITodoDTO | IMessageDTO, ICreateTodo>;
  getTodo: RequestHandler<{}, ITodoDTO[] | IMessageDTO>;
  editTodo: RequestHandler<{}, ITodoDTO | IMessageDTO, ITodoDTO>;
  deleteTodo: RequestHandler<{}, ITodoDTO | IMessageDTO, IDeleteTodo>;
}
