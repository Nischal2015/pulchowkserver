import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { StudentDto } from './dto';
import { studentJsonFormatAPIData } from 'utils/studentJsonFormatter';

/**
 * Class to implement student data getting logic
 */
@Injectable()
export class StudentService {
  constructor(private httpService: HttpService) {}

  /**
   * Function to get students
   * @param dto The search parameters to college api
   * @returns The data of the students
   */
  getStudentsByYearBatchGroup(dto: StudentDto) {
    const { prog, batch, group } = dto;
    const formData = new URLSearchParams();
    formData.append('prog', prog);
    formData.append('batch', batch);
    formData.append('group', group);
    // prog=BCT&batch=075&group=C
    return this.httpService
      .post('http://assmnt.pcampus.edu.np/api/students/', formData, {
        headers: {
          Accept: 'application/json',
        },
      })
      .pipe(map((response) => studentJsonFormatAPIData(response.data)));
  }

  /**
   * Function to get student by roll number
   * @param roll The roll number of the student
   * @param dto The search parameters to college api
   * @returns The data of the student by roll number
   */
  getStudentByRollNumber(roll: string, dto: StudentDto) {
    return this.getStudentsByYearBatchGroup(dto).pipe(
      map((data) => data.filter((student) => student.roll === roll)),
    );
  }
}
