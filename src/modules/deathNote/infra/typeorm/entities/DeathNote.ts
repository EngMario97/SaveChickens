import {
  Column,
  CreateDateColumn,
  DefaultNamingStrategy,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Client from "../../../../clients/infra/typeorm/entities/Client";
import Chicken from "../../../../chickens/infra/typeorm/entities/Chicken";

@Entity("DEATH_NOTE")
export default class DeathNote {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  client_id: number;

  @Column()
  chicken_id: number;

  @Column({ default: 30 })
  mortality_value: number;

  @Column()
  amount: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Client)
  @JoinColumn({ name: "client_id" })
  client: Client;

  @ManyToOne(() => Chicken)
  @JoinColumn({ name: "chicken_id" })
  chicken: Chicken;

}



