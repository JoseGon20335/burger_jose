import { IsNotEmpty, IsString, IsOptional, Length, IsEnum } from 'class-validator';
import { TaskStatus } from '../task-status.enum';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  title: string;

  @IsString()
  @IsOptional()
  @Length(0, 200)
  description?: string;

  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus;
}
