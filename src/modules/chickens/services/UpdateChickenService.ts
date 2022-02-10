import AppError from "../../../shared/errors/AppErrors";
import IChickenDTO from "../dtos/IChickenDTO";
import Chicken from "../infra/typeorm/entities/Chicken";
import ChickenRepository from "../infra/typeorm/repositories/ChickenRepository";
import FindChickenByIdService from "./FindChickenByIdService";

export default class UpdateChickenClientService {
  public async execute(data: IChickenDTO): Promise<Chicken> {
    const chickenRepository = new ChickenRepository();
    const findChickenById = new FindChickenByIdService();

    if (!data.id) {
      throw new AppError("Atualização precisa do id do frango");
    }

    await findChickenById.execute(data.id);

    const chicken = await chickenRepository.update(data);

    return chicken;
  }
}
