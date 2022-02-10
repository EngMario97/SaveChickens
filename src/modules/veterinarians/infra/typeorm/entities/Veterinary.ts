import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import Client from "../../../../clients/infra/typeorm/entities/Client";

@Entity("VETERINARIANS")
export default class Veterinary {
    @PrimaryGeneratedColumn("increment")
    id: number;

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

    @OneToMany(() => Client, (client) => client.veterinary)
    clients: Client[];
}

