import AppError from "../../../shared/errors/AppErrors";
import Client from "../infra/typeorm/entities/Client";
import DeathNotesByClientRepository from "../infra/typeorm/repositories/DeathNotesByClientRepository ";

export default class FindOrdersByClientService {
  public async execute(id: number): Promise<Client> {
    const categoryRepository = new DeathNotesByClientRepository();

    const client = await categoryRepository.findById(id);

    if (!client) {
      throw new AppError("Cliente não existe");
    }

    return client;
  }
}
