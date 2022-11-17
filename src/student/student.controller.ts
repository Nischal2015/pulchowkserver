import { Body, Controller, Post } from '@nestjs/common';
import { StudentService } from './student.service';
// import { StudentDto } from './dto';
import { IsNotBlankString } from '@nestjsi/class-validator';

class StudentDto {
  @IsNotBlankString()
  prog: string;

  @IsNotBlankString()
  batch: string;

  @IsNotBlankString()
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
