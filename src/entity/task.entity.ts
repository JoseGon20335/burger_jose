import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { TaskStatus } from '../dto/task-status-enum';

@Entity()
export class Task {
  @ApiProperty({ example: 1, description: 'El identificador único de la tarea' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Aprender NestJS', maxLength: 50, description: 'El título de la tarea' })
  @Column({ length: 50 })
  title: string;

  @ApiProperty({ example: 'Debo aprender NestJS para construir API RESTful', maxLength: 200, description: 'La descripción de la tarea', required: false })
  @Column({ length: 200, nullable: true })
  description: string;

  @ApiProperty({ enum: TaskStatus, description: 'El estado actual de la tarea' })
  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: TaskStatus.PENDING,
  })
  status: TaskStatus;
}