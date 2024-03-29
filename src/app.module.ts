import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PruebaModule } from './prueba/prueba.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:root@localhost:27019/nestjs?authSource=admin',
    ),
    UsersModule,
    PruebaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
