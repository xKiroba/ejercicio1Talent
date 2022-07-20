import { Entity, Column, PrimaryColumn,  } from 'typeorm';


@Entity({name:"clientes"})
export class Clients {
 @PrimaryColumn()
  rut: string;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  phone: string;


  @Column({ default: true })
  isActive: boolean;
}

