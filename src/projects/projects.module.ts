import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { Collection } from 'mongoose';
import { ProjectsController } from './projects.controller';
import { Projects } from './projects.schema';
import { ProjectService } from './projects.service';

@Module({
    controllers: [ProjectsController],
    providers: [ProjectService],
    imports: [
      MongooseModule.forFeature([{ name: 'projects', schema: Projects }]),
    ],
  })


export class ProductsModule {}