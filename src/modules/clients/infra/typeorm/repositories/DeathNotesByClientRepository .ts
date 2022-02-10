import IDeathNotesByClientRepository from "modules/clients/repositories/IDeathNotesByClientRepository";
import { getRepository, Repository } from "typeorm";
import Client from "../entities/Client";

export default class DeathNotesByClientRepository implements IDeathNotesByClientRepository {
  private ormRepository: Repository<Client>;

  constructor() {
    this.ormRepository = getRepository(Client);
  }

  async findById(id: number): Promise<Client | undefined> {

    return (
      this.ormRepository
        .createQueryBuilder("c")
        .leftJoinAndSelect("c.DEATH_NOTE", "prod")
        .where("c.id = :id", { id })
        .getOne()
    );
  }
}
