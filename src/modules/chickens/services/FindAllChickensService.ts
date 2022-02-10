import Chicken from "../infra/typeorm/entities/Chicken";
import ChickenRepository from "../infra/typeorm/repositories/ChickenRepository";

export default class FindAllChickensService {
  public async execute(): Promise<Chicken[]> {
    const chickenRepository = new ChickenRepository();

    const chickens = await chickenRepository.list();

    return chickens;
  }
}
