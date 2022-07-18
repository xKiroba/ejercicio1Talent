import { Module } from '@nestjs/common';
import { ClientController } from './controller/client.controller';

@Module({
  imports: [],
  controllers: [ClientController],
  providers: []
})
export class ClientModule {}