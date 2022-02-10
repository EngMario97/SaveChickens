import IChickenDTO from "../../../../chickens/dtos/IChickenDTO";
import IChickenRepository from "../../../../chickens/repositories/IChickenRepository";
import { DeleteResult, getRepository, Repository } from "typeorm";
import Chicken from "../entities/Chicken";

export default class ChickenRepository implements IChickenRepository {
  private ormRepository: Repository<Chicken>;

  constructor() {
    this.ormRepository = getRepository(Chicken);
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.ormRepository.delete(id);
  }

  async update(data: IChickenDTO): Promise<Chicken> {
    const chicken = await this.ormRepository.save(data);
    return chicken;
  }

  async findById(id: number): Promise<Chicken | undefined> {
    const chicken = await this.ormRepository.findOne(id);
    return chicken;
  }

  async list(): Promise<Chicken[]> {
    const chickens = await this.ormRepository.find();
    return chickens;
  }

  async create(data: IChickenDTO): Promise<Chicken> {
    const chicken = this.ormRepository.create(data);
    return this.ormRepository.save(chicken);
  }
}
