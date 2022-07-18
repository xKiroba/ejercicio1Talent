import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ClientDTO } from '../client.dto';

@Controller('users')
export class ClientController {

    clients: ClientDTO[] = [];

    @Get()
    getAllUsers(): ClientDTO[] {
        return this.clients;
    }

    @Get(':rut')
    getUserById(@Param('rut') rut: string): ClientDTO {
        const client = this.clients.find(client => client.rut == rut);
        return client;
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
    }

}