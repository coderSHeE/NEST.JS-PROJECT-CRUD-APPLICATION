import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client, ClientDocument } from './schema/client-schema';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel(Client.name) private clientModel: Model<ClientDocument>,
  ) {}

  async findAll(): Promise<Client[]> {
    return this.clientModel.find().exec();
  }

  async create(client: Client | Client[]): Promise<Client | Client[]> {
    return this.clientModel.create(client);
  }
}
