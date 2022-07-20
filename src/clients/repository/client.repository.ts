
import { InjectRepository } from "@nestjs/typeorm";
import { EntityRepository, Repository } from "typeorm";
import { Clients } from "../models/clients.model";
//import { ClientsRepositoryInterface } from "./client.repository.interface";


@EntityRepository(Clients)
export class ClientsRepository extends Repository<Clients> {
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

    

}
