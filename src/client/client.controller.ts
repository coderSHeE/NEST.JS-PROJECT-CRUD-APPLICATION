import { Controller, Get } from '@nestjs/common';
import { ClientService} from './client.service';


@Controller('client')
export class ClientController {
    constructor (private clientService: ClientService){}


    @Get()
    async getAll(){
        return await this.clientService.getAll();
    }
}
