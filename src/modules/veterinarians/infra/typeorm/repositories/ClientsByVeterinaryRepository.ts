import IClientsByVeterinaryRepository from "modules/veterinarians/repositories/IClientsByVeterinaryRepository";
import { getRepository, Repository } from "typeorm";
import Veterinary from "../entities/Veterinary";

export default class ClientsByVeterinaryRepository implements IClientsByVeterinaryRepository {
  private ormRepository: Repository<Veterinary>;

  constructor() {
    this.ormRepository = getRepository(Veterinary);
  }

  async findById(id: number): Promise<Veterinary | undefined> {

    return (
      this.ormRepository
        .createQueryBuilder("V")
        .leftJoinAndSelect("V.CLIENTS", "prod")
        .where("V.id = :id", { id })
        .getOne()
    );
  }
}
