import { Inject, Injectable } from '@nestjs/common';
import { ClientDTO } from '../dto/client.dto';
import { Client } from '../interfaces/client.interfaces';
import { Clients } from '../models/clients.model';
import { ClientsRepository } from '../repository/client.repository';
import { ClientsRepositoryInterface } from '../repository/client.repository.interface';

@Injectable()
export class ClientsService  {

   constructor(private readonly clientsRepository:ClientsRepository){


   }


   async getClients():Promise<Clients[]>{

    return await this.clientsRepository.getClients();
   }
   
  async createClient(clientDto: ClientDTO):Promise<Clients>{
    return await this.clientsRepository.createClient(clientDto);
  }

  async getClient(rut: string):Promise<Clients>{
    return await this.clientsRepository.getClient(rut)
  }

  async deleteClient(rut:string):Promise<Clients[]>{
    return await this.clientsRepository.deleteClient(rut)
  }

  async updateClient(clientDto: ClientDTO):Promise<Clients[]>{
    return await this.clientsRepository.updateClient(clientDto);
  }

    
  }

 /*   constructor(@Inject ('ClientReposityInterface')
    private clientRepository: ClientsRepositoryInterface
    ){

    }
//  private readonly clients: Client[] = [];

  create(client: Client) {
    //this.clients.push(client);
  }

 // findAll(): Client[] {
    //return this.clients;
    getClient(rut){
        this.clientRepository.getClients(rut)
    }*/
  
  

  