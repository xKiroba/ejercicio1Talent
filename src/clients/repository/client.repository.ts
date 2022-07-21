
import { InjectRepository } from "@nestjs/typeorm";
import { ClientRequest } from "http";
import { DeleteResult, EntityRepository, Repository } from "typeorm";
import { ClientDTO } from "../dto/client.dto";
import { Clients } from "../models/clients.model";
//import { ClientsRepositoryInterface } from "./client.repository.interface";


@EntityRepository(Clients)
export class ClientsRepository extends Repository<Clients> {
  createUser(): import("../interfaces/client.interfaces").Client | PromiseLike<import("../interfaces/client.interfaces").Client> {
    throw new Error('Method not implemented.');
  }
  ClientsRepository: any;
  Clients: any;
/*  constructor(
    @InjectRepository(Clients)
    private clientRepo: Repository<Clients>
  ) {
  }*/

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

    async getClient(rut:string):Promise<Clients>{
      const client = await this.findOne({ rut });
      if (client) {
        return client
        
      }
      throw new Error(`The user with id: ${rut} does not exist!`);
    }

    async deleteClient(rut:string): Promise<Clients[]>{
      const client = await this.findOne({rut});
    
      if (client) {
        await this.delete({rut: client.rut});
        return []
      }
      throw new Error(`The user with id: ${rut} does not exist!`);

    }

    async updateClient(clientDto: ClientDTO): Promise<Clients[]>{
      const client = await this.findOne({'rut': clientDto.rut})
      if(client){
        await this.save({rut:clientDto.rut, ...clientDto})
        return
      } 
      throw new Error(`The user with id: ${clientDto.rut} does not exist!`);
       
       
    }
} 


  
/*async updateUser() {
  const user = await Clients.findOne({ rut });

  if (!user) {
    throw new Error(`The user with id: ${rut} does not exist!`);
  }

  Object.assign(user);
  await user.save();

  return user;
}



async deleteUser(): Promise<Clients[]>{
  const user = await this.Clients.findOne({ where: { rut }});

  if (!user) {
    throw new Error(`The user with id: ${rut} does not exist!`);
  }

  await user.remove();
  return true;
}
*/
    


