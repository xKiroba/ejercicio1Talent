import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, Max, Min } from "class-validator";

export class dbResponseDTO{

     mensaje: string;
     status: boolean;
}

