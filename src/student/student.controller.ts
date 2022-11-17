import { Body, Controller, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentDto } from './dto';

/**
 * Class that defines the student controller
 */
@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}

  /**
   * Function to get students by year, batch and group
   * @param dto The api parameters to pass
   * @returns Students by year, batch and group
   */
  @Post()
  getStudentsByYearBatchGroup(@Body() dto: StudentDto) {
    return this.studentService.getStudentsByYearBatchGroup(dto);
  }
}
