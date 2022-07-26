
import { NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ClientRequest } from "http";
import { DeleteResult, EntityRepository, Repository } from "typeorm";
import { ClientDTO } from "../dto/client.dto";
import { dbResponseDTO } from "../dto/dbResponse.dto";
import { Clients } from "../models/clients.model";


@EntityRepository(Clients)
export class ClientsRepository extends Repository<Clients> {
  createUser(): import("../interfaces/client.interfaces").Client | PromiseLike<import("../interfaces/client.interfaces").Client> {
    throw new Error('Method not implemented.');
  }
  ClientsRepository: any;
  Clients: any;

  async getClients(): Promise<Clients[]>{
    try{
    return await this.find();
    }
    catch(err){
        throw err;
    }};


    async createClient(clientDto:ClientDTO): Promise<Clients> {
      const client = this.create(clientDto);
      await this.save(client);
      return client;
    }

    async getClient(id:string):Promise<Clients>{
      const client = await this.findOne({ id });
      if (client) {
        return client
        
      }
      throw new NotFoundException(`The user with id: ${id} does not exist!`);
    }

    async deleteClient(id:string): Promise<dbResponseDTO>{
      const client = await this.findOne({id});
    
      if (client) {
        await this.delete({id: client.id});
        return {mensaje: `El usuario del id: ${id} ha sido eliminado`,status:true}
      }
      throw new NotFoundException(`The user with id: ${id} does not exist!`)

    }

    async updateClient(clientDto: ClientDTO): Promise<dbResponseDTO>{
      const client = await this.findOne({'id': clientDto.id})
      if(client){
        await this.save({rut:client.rut, ...clientDto})
        return {mensaje: `El usuario del id: ${client.id} ha sido modificado`,status:true}
      } 
      throw new NotFoundException(`The user with id: ${clientDto.id} does not exist!`);
       
       
    }
} 

