import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { ClientService } from './app.service';
import { ClientModule } from './client/client.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest/'),
    ClientModule,
  ],
  controllers: [AppController],
  providers: [ClientService],
})
export class AppModule {}
