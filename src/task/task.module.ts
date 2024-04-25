import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksController } from './task.controller';
import { TasksService } from './task.service';
import { Task } from '../entity/task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task])], // Importa TypeOrmModule aquí
  controllers: [TasksController],
  providers: [TasksService],
})
export class TaskModule {}
