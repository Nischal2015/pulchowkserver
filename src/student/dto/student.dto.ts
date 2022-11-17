import { IsNotBlankString } from '@nestjsi/class-validator';
export class StudentDto {
  @IsNotBlankString()
  prog: string;

  @IsNotBlankString()
  batch: string;

  @IsNotBlankString()
  group: string;
}
