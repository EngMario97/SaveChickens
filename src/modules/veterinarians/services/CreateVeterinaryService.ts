import IVeterinaryDTO from "../dtos/IVeterinaryDTO";
import Veterinary from "../infra/typeorm/entities/Veterinary";
import VeterinaryRepository from "../infra/typeorm/repositories/VeterinaryRepository";

export default class CreateVeterinaryService {
  public async execute(data: IVeterinaryDTO): Promise<Veterinary> {
    const veterinaryRepository = new VeterinaryRepository();

    const veterinary = await veterinaryRepository.create(data);

    return veterinary;
  }
}
