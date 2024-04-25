import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from '../task/task.controller';
import { TasksService } from '../task/task.service';
import { Task } from '../entity/task.entity';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { UpdateTaskDto } from 'src/dto/update-task.dto';

const mockTasksService = {
  findAll: jest.fn(),
  findOne: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
};

describe('TasksController', () => {
  let controller: TasksController;

  beforeEach(async () => {
    // Aquí configuramos el TestingModule para incluir el mock
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      // Proveemos el mockTasksService como un valor para TasksService
      providers: [
        {
          provide: TasksService,
          useValue: mockTasksService,
        },
      ],
    }).compile();

    controller = module.get<TasksController>(TasksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a task', async () => {
    const newTaskDto: CreateTaskDto = { title: 'New Task', description: 'New Description' };
    const result = new Task();
    
    jest.spyOn(mockTasksService, 'create').mockImplementation(() => Promise.resolve(result));
  
    expect(await controller.create(newTaskDto)).toBe(result);
  });

  it('should return an array of tasks', async () => {
    const result = [new Task(), new Task()];
    
    jest.spyOn(mockTasksService, 'findAll').mockImplementation(() => Promise.resolve(result));
  
    expect(await controller.findAll()).toBe(result);
  });

  it('should return a single task', async () => {
    const task = new Task();
    const taskId = '1';
    
    jest.spyOn(mockTasksService, 'findOne').mockImplementation(() => Promise.resolve(task));
  
    expect(await controller.findOne(taskId)).toBe(task);
  });
  
  it('should update a task', async () => {
    const updateTaskDto: UpdateTaskDto = { title: 'Updated Title' };
    const updatedTask = new Task();
    const taskId = '1';
    
    jest.spyOn(mockTasksService, 'update').mockImplementation(() => Promise.resolve(updatedTask));
  
    expect(await controller.update(taskId, updateTaskDto)).toBe(updatedTask);
  });
  
  it('should delete a task', async () => {
    const taskId = '1';
    
    jest.spyOn(mockTasksService, 'remove').mockImplementation(() => Promise.resolve());
  
    await controller.remove(taskId);
    
    expect(mockTasksService.remove).toHaveBeenCalledWith(+taskId);
  });
  
});