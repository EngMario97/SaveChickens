import IVeterinaryDTO from "modules/veterinarians/dtos/IVeterinaryDTO";
import IVeterinaryRepository from "modules/veterinarians/repositories/IVeterinaryRepository";
import { DeleteResult, getRepository, Repository } from "typeorm";
import Veterinary from "../entities/Veterinary";

export default class VeterinaryRepository implements IVeterinaryRepository {
  private ormRepository: Repository<Veterinary>;

  constructor() {
    this.ormRepository = getRepository(Veterinary);
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.ormRepository.delete(id);
  }

  async update(data: IVeterinaryDTO): Promise<Veterinary> {
    const veterinary = await this.ormRepository.save(data);
    return veterinary;
  }

  async findById(id: number): Promise<Veterinary | undefined> {
    const veterinary = await this.ormRepository.findOne(id);

    return veterinary;
  }

  async list(): Promise<Veterinary[]> {
    const veterinarians = await this.ormRepository.find();

    return veterinarians;
  }

  async create(data: IVeterinaryDTO): Promise<Veterinary> {
    const veterinary = this.ormRepository.create(data);
    return this.ormRepository.save(veterinary);
  }
}
