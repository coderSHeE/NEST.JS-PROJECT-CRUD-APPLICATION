import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientSchema } from './schema/client-schema';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'brandsalelist',
        schema: ClientSchema,
        collection: 'brandsalelist',
      },
    ]),
  ],
  providers : [ClientService],
  controllers: [ClientController],
})
export class ClientModule {}