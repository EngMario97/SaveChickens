import Veterinary from "../infra/typeorm/entities/Veterinary";
import VeterinaryRepository from "../infra/typeorm/repositories/VeterinaryRepository";

export default class FindAllVeterinariansService {
  public async execute(): Promise<Veterinary[]> {
    const veterinaryRepository = new VeterinaryRepository();

    const veterinarians = await veterinaryRepository.list();

    return veterinarians;
  }
}
