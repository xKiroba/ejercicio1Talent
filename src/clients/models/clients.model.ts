import { Entity, Column, PrimaryColumn,  } from 'typeorm';


@Entity({name:"clientes"})
export class Clients {
  static findOne(arg0: { rut: import("../dto/client.dto").ClientDTO; }) {
    throw new Error("Method not implemented.");
  }
  static create(data: Clients) {
    throw new Error("Method not implemented.");
  }
 @PrimaryColumn()
  rut: string;

  @Column()
  id: string;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  phone: string;


  @Column({ default: true })
  isActive: boolean;
}

