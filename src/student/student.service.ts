import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { StudentDto } from './dto';
import { studentJsonFormatAPIData } from 'utils/studentJsonFormatter';

@Injectable()
export class StudentService {
  constructor(private httpService: HttpService) {}

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
}
