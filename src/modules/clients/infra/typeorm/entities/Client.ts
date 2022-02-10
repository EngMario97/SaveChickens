import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Veterinary from "../../../../veterinarians/infra/typeorm/entities/Veterinary";
import DeathNote from "../../../../deathNote/infra/typeorm/entities/DeathNote";

@Entity("CLIENTS")
export default class Client {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  veterinary_id: number;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @Column()
  email: string;

  @Column()
  telephone: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Veterinary, (veterinary) => veterinary.clients)
  @JoinColumn({ name: "veterinary_id" })
  veterinary: Veterinary;

  @OneToMany(() => DeathNote, (deathNote) => deathNote.client)
  deathNotes: DeathNote[];
}
