import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { ClientDTO } from '../dto/client.dto';
import { ClientsRepository } from '../repository/client.repository';
import { ClientsService } from '../service/client.service';

@Controller('v1/clients')
export class ClientController {
 /*   constructor(
        @Inject('ClientInterface')
        private client: Client
        
    ) {}*/


    constructor(private readonly clientService: ClientsService){}



    clients: ClientDTO[] = [];

    @Get()
    async getAllUsers() {
       return await this.clientService.getClients();
    }

   /* @Get(':rut')
    getUserById(@Param('rut') rut: string): ClientDTO {
        //const client = this.clients.find(client => client.rut == rut);
        return this.client.getClient(rut);
    }

    @Post()
    newUser(@Body() user: ClientDTO): ClientDTO {
        const newClient = {...user}
        this.clients = [...this.clients, newClient];
        return newClient;
    }

    @Put(':rut')
    updateClient(@Param('rut') rut: string, @Body() client: ClientDTO): ClientDTO {
        this.clients = this.clients.filter(user => client.rut !== rut);
        this.clients = [...this.clients, this.newUser(client)];
        return client;
    }

    @Delete(':rut')
    deleteUser(@Param('rut') rut: string) {
        this.clients = this.clients.filter(client => client.rut !== rut);
    }*/

}