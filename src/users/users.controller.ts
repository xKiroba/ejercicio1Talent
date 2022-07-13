import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserDTO } from './user.dto';

@Controller('users')
export class UsersController {

    users: UserDTO[] = [];

    @Get()
    getAllUsers(): UserDTO[] {
        return this.users;
    }

    @Get(':rut')
    getUserById(@Param('rut') rut: string): UserDTO {
        const user = this.users.find(user => user.rut == rut);
        return user;
    }

    @Post()
    newUser(@Body() user: UserDTO): UserDTO {
        const newUser = {...user}
        this.users = [...this.users, newUser];
        return newUser;
    }

    @Put(':rut')
    updateUser(@Param('rut') rut: string, @Body() user: UserDTO): UserDTO {
        this.users = this.users.filter(user => user.rut !== rut);
        this.users = [...this.users, this.newUser(user)];
        return user;
    }

    @Delete(':rut')
    deleteUser(@Param('rut') rut: string) {
        this.users = this.users.filter(user => user.rut !== rut);
    }

}