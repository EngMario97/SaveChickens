import IChickenDTO from "../dtos/IChickenDTO";
import Chicken from "../infra/typeorm/entities/Chicken";
import ChickenRepository from "../infra/typeorm/repositories/ChickenRepository";

export default class CreateChickenService {
  public async execute(data: IChickenDTO): Promise<Chicken> {
    const chickenRepository = new ChickenRepository();

    const chicken = await chickenRepository.create(data);

    return chicken;
  }
}
