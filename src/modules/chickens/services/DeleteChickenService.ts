import { DeleteResult } from "typeorm";
import AppError from "../../../shared/errors/AppErrors";
import Chicken from "../infra/typeorm/entities/Chicken";
import ChickenRepository from "../infra/typeorm/repositories/ChickenRepository";
import FindChickenByIdService from "./FindChickenByIdService";

export default class DeleteChickenService {
  public async execute(id: number): Promise<DeleteResult> {
    const chickenRepository = new ChickenRepository();

    const findChickenByIDService = new FindChickenByIdService();

    await findChickenByIDService.execute(id);

    const result = await chickenRepository.delete(id);

    return result;
  }
}
