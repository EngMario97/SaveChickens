import IOrdersByClientRepository from "modules/clients/repositories/IOrdersByClientRepository";
import { getRepository, Repository } from "typeorm";
import Client from "../entities/Client";

/**
 * É nesse arquivo que serão feitas todas as conexões com o banco de dados
 * Ele implementa a Interface de IOrdersByClientRepository portanto, sempre
 * que precisar de um novo método ele deve ser criado na interface também
 */
export default class OrdersByClientRepository implements IOrdersByClientRepository {
  private ormRepository: Repository<Client>;

  constructor() {
    this.ormRepository = getRepository(Client);
  }

  async findById(id: number): Promise<Client | undefined> {
    // Primeira forma - traz todos os pedidos de um cliente
    // return this.ormRepository.findOne(id, {
    //   relations: ["pedidos"],
    // });

    // Segunda Forma - Traz todos os pedidos de um cliente
    return (
      this.ormRepository
        .createQueryBuilder("c")
        // .select(["c.id", "c.descricao", "prod.nome"])
        .leftJoinAndSelect("c.pedidos", "prod")
        .where("c.id = :id", { id })
        .getOne()
    );
  }
}
