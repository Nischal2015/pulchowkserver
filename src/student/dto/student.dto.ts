import { IsString } from 'class-validator';
export class StudentDto {
  @IsString()
  prog: string;

  @IsString()
  batch: string;

  @IsString()
  group: string;
}
