import AppError from "../../../shared/errors/AppErrors";
import IVeterinaryDTO from "../dtos/IVeterinaryDTO";
import Veterinary from "../infra/typeorm/entities/Veterinary";
import VeterinaryRepository from "../infra/typeorm/repositories/VeterinaryRepository";
import FindVeterinaryByIdService from "./FindVeterinaryByIdService";

export default class UpdateVeterinaryService {
  public async execute(data: IVeterinaryDTO): Promise<Veterinary> {
    const veterinaryRepository = new VeterinaryRepository();
    const findVeterinaryById = new FindVeterinaryByIdService();

    if (!data.id) {
      throw new AppError("Atualização precisa do id do veterinário");
    }

    await findVeterinaryById.execute(data.id);

    const veterinary = await veterinaryRepository.update(data);

    return veterinary;
  }
}
