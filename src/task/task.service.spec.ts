import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from '../task/task.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Task } from '../entity/task.entity';

describe('TasksService', () => {
  let service: TasksService;
  let mockTasksRepository;

  beforeEach(async () => {
    // Aquí se define mockTasksRepository antes de cada prueba
    mockTasksRepository = {
      create: jest.fn(),
      save: jest.fn(),
      find: jest.fn(),
      findOne: jest.fn(),
      preload: jest.fn(),
      remove: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksService,
        {
          provide: getRepositoryToken(Task),
          useValue: mockTasksRepository, // Proveemos mockTasksRepository aquí
        },
      ],
    }).compile();

    service = module.get<TasksService>(TasksService);
  });

  // Ejemplo de prueba para el método 'update'
  describe('update', () => {
    it('should update a task', async () => {
      const task = new Task();
      task.id = 1;
      task.title = 'Test task';
      task.description = 'Test description';
      task.status = 'pending';

      const updatedTaskDto = { title: 'Updated Test task' };
      const updatedTask = {
        ...task,
        ...updatedTaskDto,
      };

      mockTasksRepository.preload.mockResolvedValue(updatedTask);
      mockTasksRepository.save.mockResolvedValue(updatedTask);

      expect(await service.update(1, updatedTaskDto)).toEqual(updatedTask);
      expect(mockTasksRepository.preload).toHaveBeenCalledWith({
        id: 1,
        ...updatedTaskDto,
      });
      expect(mockTasksRepository.save).toHaveBeenCalledWith(updatedTask);
    });
  });

  describe('create', () => {
    it('should successfully insert a task', async () => {
      const newTaskDto = { title: 'Test task', description: 'Test description' };
      const newTask = { id: 1, ...newTaskDto, status: 'pending' };
  
      mockTasksRepository.create.mockReturnValue(newTask);
      mockTasksRepository.save.mockResolvedValue(newTask);
  
      expect(await service.create(newTaskDto)).toEqual(newTask);
      expect(mockTasksRepository.create).toHaveBeenCalledWith(newTaskDto);
      expect(mockTasksRepository.save).toHaveBeenCalledWith(newTask);
    });
  });

  describe('findAll', () => {
    it('should return an array of tasks', async () => {
      const taskArray = [
        { id: 1, title: 'Test task 1', description: 'Test description 1', status: 'pending' },
        { id: 2, title: 'Test task 2', description: 'Test description 2', status: 'completed' },
      ];
  
      mockTasksRepository.find.mockResolvedValue(taskArray);
  
      expect(await service.findAll()).toEqual(taskArray);
      expect(mockTasksRepository.find).toHaveBeenCalledTimes(1);
    });
  });

  describe('findOne', () => {
    it('should return a single task', async () => {
      const singleTask = { id: 1, title: 'Test task', description: 'Test description', status: 'pending' };
  
      mockTasksRepository.findOne.mockResolvedValue(singleTask);
  
      expect(await service.findOne(1)).toEqual(singleTask);
      expect(mockTasksRepository.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
    });
  });
  
  describe('remove', () => {
    it('should delete a task', async () => {
      const taskToRemove = { id: 1, title: 'Test task', description: 'Test description', status: 'pending' };
      
      mockTasksRepository.findOne.mockResolvedValue(taskToRemove);
      mockTasksRepository.remove.mockResolvedValue(taskToRemove);
  
      await service.remove(1);
      expect(mockTasksRepository.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
      expect(mockTasksRepository.remove).toHaveBeenCalledWith(taskToRemove);
    });
  });
  
});
