import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BrandSalesDailyController } from './client.controller';
import { ClientService } from './client.service';
import { Client, ClientSchema } from './schema/client-schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }])],
  controllers: [BrandSalesDailyController],
  providers: [ClientService],
})
export class ClientModule {}
