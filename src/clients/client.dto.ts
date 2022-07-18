import { ApiProperty } from "@nestjs/swagger";
import { IsEmail } from "class-validator";

export class ClientDTO {

    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly lastname: string;

    @ApiProperty()
    @IsEmail()
    readonly email: string;

    @ApiProperty()
    readonly phone: string;

    @ApiProperty()
    readonly rut: string;

    constructor( name: string,lastname:string,email:string,phone:string,rut:string) {
        
        this.name = name;
        this.lastname= lastname;
        this.email=email;
        this.phone=phone;
        this.rut=rut;

    }
}

