import { Controller, Get, Post, Body } from '@nestjs/common';
import { ClientService } from './client.service';
import { Client } from './schema/client-schema';

@Controller('api/v1/brand_sales_daily')
export class BrandSalesDailyController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  async findAll(): Promise<Client[]> {
    return this.clientService.findAll();
  }

  @Post()
  async create(@Body() client: Client | Client[]): Promise<Client | Client[]> {
    return this.clientService.create(client);
  }
}
