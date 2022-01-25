import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import Category from "modules/categories/infra/typeorm/entities/Category";

@Entity("Produtos")
export default class Product {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  nome: string;

  @Column()
  preco: number;

  @Column()
  quantidade: number;

  @Column()
  categoria_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  /**
  * Muitos produtos podem ter a mesma categoria
  */
  @ManyToOne(() => Category, (category) => category.produtos)
  @JoinColumn({ name: "categoria_id" })
  categoria: Category;
}
