import { Body, Controller, Post } from '@nestjs/common';
import { StudentService } from './student.service';
// import { StudentDto } from './dto';
import { IsString } from 'class-validator';

class StudentDto {
  @IsString()
  prog: string;

  @IsString()
  batch: string;

  @IsString()
  group: string;
}

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Post()
  getStudentsByYearBatchGroup(@Body() dto: StudentDto) {
    return this.studentService.getStudentsByYearBatchGroup(dto);
  }
}
