import { PrismaClient } from "@prisma/client";
import { ITodoDTO } from "../dto/todo.dto";
import { ICreateTodo, IUpdateTodo } from "../interfaces/todo.interface";

export default class ITodoRepository implements ITodoRepository {
  constructor(private prisma: PrismaClient) {}
  public async create(todo: ICreateTodo): Promise<ITodoDTO> {
    return await this.prisma.todo.create({
      data: {
        todo_list: todo.todo_list,
        date: todo.date,
      },
    });
  }

  public async get(): Promise<ITodoDTO[]> {
    const allTodo = await this.prisma.todo.findMany({
      select: {
        id: true,
        todo_list: true,
        date: true,
        isDone: true,
      },
    });

    return allTodo;
  }

  public async edit(todo: IUpdateTodo): Promise<ITodoDTO> {
    const updateTodo = await this.prisma.todo.update({
      where: { id: todo.id },
      data: {
        todo_list: todo.todo_list,
        date: todo.date,
        isDone: todo.isDone,
      },
      select: {
        id: true,
        todo_list: true,
        date: true,
        isDone: true,
      },
    });
    return updateTodo;
  }

  public async delete(id: number): Promise<ITodoDTO> {
    try {
      return await this.prisma.todo.delete({
        where: { id: id },
      });
    } catch (error) {
      throw error;
    }
  }
}
