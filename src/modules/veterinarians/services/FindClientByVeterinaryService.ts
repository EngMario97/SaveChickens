import AppError from "../../../shared/errors/AppErrors";
import Veterinary from "../infra/typeorm/entities/Veterinary";
import ClientsByVeterinaryRepository from "../infra/typeorm/repositories/ClientsByVeterinaryRepository";

export default class FindClientsByVeterinaryService {
  public async execute(id: number): Promise<Veterinary> {
    const categoryRepository = new ClientsByVeterinaryRepository();

    const veterinary = await categoryRepository.findById(id);

    if (!veterinary) {
      throw new AppError("Veterinário não existe");
    }

    return veterinary;
  }
}
