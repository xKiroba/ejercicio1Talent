import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientController } from './controller/client.controller';
import { ClientsRepository } from './repository/client.repository';
import { ClientsService } from './service/client.service';

@Module({
  imports: [TypeOrmModule.forFeature([ClientsRepository])],
  controllers: [ClientController],
  providers: [ClientsService]
})
export class ClientModule {}