import { Body, Controller, Get , Post} from '@nestjs/common';
import { ClientService} from './client.service';
import { Client } from './schema/client-schema';


@Controller('client')
export class ClientController {
    constructor (private clientService: ClientService){}


    @Get()
    async getAll(){
        return await this.clientService.getAll();
    }
    

    @Post('')
    async create(@Body()  client : Client){
        return await this.clientService.create(client);

    }
}
