import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { StudentService } from './student/student.service';
import { StudentController } from './student/student.controller';
import { StudentModule } from './student/student.module';

@Module({
  imports: [HttpModule, StudentModule, ConfigModule.forRoot()],
  controllers: [StudentController],
  providers: [StudentService],
  exports: [HttpModule],
})

/**
 * Class that combines app controllers and providers
 */
export class AppModule {}
