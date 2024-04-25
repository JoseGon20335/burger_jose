import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entity/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  // Ejemplo de cómo crear una tarea
  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description } = createTaskDto;
    const task = this.tasksRepository.create({
      title,
      description,
      status: TaskStatus.PENDING, // estado inicial
    });

    await this.tasksRepository.save(task);
    return task;
  }

  // Ejemplo de cómo obtener todas las tareas
  async getAllTasks(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  // Aquí irían los demás métodos para actualizar y eliminar
}
