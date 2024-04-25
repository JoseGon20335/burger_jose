import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Task } from './task.entity';

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

  // ... más pruebas
});
