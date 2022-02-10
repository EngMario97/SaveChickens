import AppError from "../../../shared/errors/AppErrors";
import Chicken from "../infra/typeorm/entities/Chicken";
import ChickenRepository from "../infra/typeorm/repositories/ChickenRepository";

export default class FindChickenByIdService {
  public async execute(id: number): Promise<Chicken> {
    const chickenRepository = new ChickenRepository();

    const chicken = await chickenRepository.findById(id);

    if (!chicken) {
      throw new AppError("Frango não existe");
    }

    return chicken;
  }
}
