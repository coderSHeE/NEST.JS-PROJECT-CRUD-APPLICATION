import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client, ClientDocument } from './client/schema/client-schema';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel(Client.name) private clientModel: Model<ClientDocument>,
  ) {}

  async getById(id: string) {
    return await this.clientModel.findById(id).exec();
  }

  async create(client: Client): Promise<Client> {
    const createdClient = new this.clientModel(client);
    return await createdClient.save();
  }

  async update(id: string, client: Client): Promise<Client> {
    return await this.clientModel.findByIdAndUpdate(id, client, { new: true }).exec();
  }

  async delete(id: string): Promise<Client> {
    return await this.clientModel.findByIdAndRemove(id).exec();
  }
}
