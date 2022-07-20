import { Repository } from "typeorm";
import { Clients } from "../models/clients.model";

export interface ClientsRepositoryInterface extends Repository<Clients>{


    
}