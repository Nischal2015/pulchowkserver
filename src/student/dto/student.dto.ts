import { IsNotBlankString } from '@nestjsi/class-validator';

/**
 * Class to perform api parameter validation
 */
export class StudentDto {
  @IsNotBlankString()
  prog: string;

  @IsNotBlankString()
  batch: string;

  @IsNotBlankString()
  group: string;
}
