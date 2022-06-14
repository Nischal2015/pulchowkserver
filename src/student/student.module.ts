import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
  imports: [HttpModule],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
