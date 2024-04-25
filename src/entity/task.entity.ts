import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
export enum TaskStatus {
  PENDING = 'pendiente',
  IN_PROGRESS = 'en progreso',
  COMPLETED = 'completada',
}

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column({ length: 50 })
  title: string;

  @Column({ length: 200, nullable: true })
  description: string;

  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: TaskStatus.PENDING,
  })
  status: TaskStatus;
}
