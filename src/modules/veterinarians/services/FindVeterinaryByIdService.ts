import AppError from "../../../shared/errors/AppErrors";
import Veterinary from "../infra/typeorm/entities/Veterinary";
import VeterinaryRepository from "../infra/typeorm/repositories/VeterinaryRepository";

export default class FindVeterinaryByIdService {
  public async execute(id: number): Promise<Veterinary> {
    const veterinaryRepository = new VeterinaryRepository();

    const veterinary = await veterinaryRepository.findById(id);

    if (!veterinary) {
      throw new AppError("Veterinário não existe");
    }

    return veterinary;
  }
}
