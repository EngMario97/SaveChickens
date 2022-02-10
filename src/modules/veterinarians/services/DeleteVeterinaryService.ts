import { DeleteResult } from "typeorm";
import AppError from "../../../shared/errors/AppErrors";
import Veterinary from "../infra/typeorm/entities/Veterinary";
import VeterinaryRepository from "../infra/typeorm/repositories/VeterinaryRepository";
import FindVeterinaryByIdService from "../services/FindVeterinaryByIdService";

export default class DeleteVeterinaryService {
  public async execute(id: number): Promise<DeleteResult> {
    const veterinaryRepository = new VeterinaryRepository();

    const findVeterinaryByIDService = new FindVeterinaryByIdService();

    await findVeterinaryByIDService.execute(id);

    const result = await veterinaryRepository.delete(id);

    return result;
  }
}
