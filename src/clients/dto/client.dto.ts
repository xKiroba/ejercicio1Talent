import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, Max, Min } from "class-validator";

export class ClientDTO {

    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly lastname: string;

    @ApiProperty()
    @IsEmail()
    readonly email: string;

    @ApiProperty()
    @Min(9)
    @Max(11)
    readonly phone: string;

    @ApiProperty()
    readonly rut: string;

}

