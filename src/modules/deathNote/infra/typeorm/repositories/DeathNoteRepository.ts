import { getRepository, Like, Repository } from "typeorm";
import IDeathNoteDTO from "../../../../deathNote/dtos/IDeathNoteDTO";
import IDeathNoteRepository from "../../../repositories/IDeathNoteRepository";
import DeathNote from "../entities/DeathNote";

export default class DeathNoteRepository implements IDeathNoteRepository {
  private ormRepository: Repository<DeathNote>;

  constructor() {
    this.ormRepository = getRepository(DeathNote);
  }

  async filterByClientAndDate(data: IDeathNoteDTO): Promise<DeathNote[]> {
    let date = new Date();
    let newdate = date.toISOString().split("T")[0];

    return this.ormRepository.find({
      where: {
        client_id: data.client_id, chicken_id: data.chicken_id, created_at: Like(`%${newdate}%`)
      }
    })

  }

  async findById(id: number): Promise<DeathNote | undefined> {
    return this.ormRepository
      .createQueryBuilder("DEATH_NOTE")
      .leftJoinAndSelect("DEATH_NOTE.CHICKENS", "pp")
      .leftJoinAndSelect("pp.CHICKENS", "p")
      .where("DEATH_NOTE.id = :id", { id })
      .getOne();
  }

  async create(data: IDeathNoteDTO): Promise<DeathNote> {

    const deathNote = this.ormRepository.create(data);

    return this.ormRepository.save(deathNote);
  }
}
