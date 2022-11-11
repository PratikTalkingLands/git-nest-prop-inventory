import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './projects/projects.module';

@Module({
  imports: [ProductsModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/project')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
