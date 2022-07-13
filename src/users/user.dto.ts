import { ApiProperty } from "@nestjs/swagger";
import { throws } from "assert";
import { IsEmail } from "class-validator";

export class UserDTO {

    @ApiProperty()
    readonly names: string;

    @ApiProperty()
    readonly lastname: string;

    @ApiProperty()
    @IsEmail()
    readonly email: string;

    @ApiProperty()
    readonly tel: string;

    @ApiProperty()
    readonly rut: string;

    constructor( names: string,lastname:string,email:string,tel:string,rut:string) {
        
        this.names = names;
        this.lastname= lastname;
        this.email=email;
        this.tel=tel;
        this.rut=rut;

    }
}

