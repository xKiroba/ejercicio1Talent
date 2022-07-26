import { Inject, Injectable } from '@nestjs/common';
import { ClientDTO } from '../dto/client.dto';
import { Client } from '../interfaces/client.interfaces';
import { Clients } from '../models/clients.model';
import { ClientsRepository } from '../repository/client.repository';
import { ClientsRepositoryInterface } from '../repository/client.repository.interface';
import { uuid } from 'uuidv4';
import { dbResponseDTO } from '../dto/dbResponse.dto';

@Injectable()
export class ClientsService {

  constructor(private readonly clientsRepository: ClientsRepository) {

  }

  async getClients(): Promise<Clients[]> {
    const clientResponse= await this.clientsRepository.getClients();
    for (const client of clientResponse){
      delete client.rut
    }
     return clientResponse
  }

  async createClient(clientDto: ClientDTO): Promise<Clients> {
    clientDto.id = uuid()
    return await this.clientsRepository.createClient(clientDto);
  }

  async getClient(id: string): Promise<Clients> {
    return await this.clientsRepository.getClient(id)
  }

  async deleteClient(id: string): Promise<dbResponseDTO> {
    return await this.clientsRepository.deleteClient(id)
  }

  async updateClient(clientDto: ClientDTO): Promise<dbResponseDTO> {
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



