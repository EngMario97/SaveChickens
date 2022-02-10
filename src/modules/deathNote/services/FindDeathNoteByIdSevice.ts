import AppError from "../../../shared/errors/AppErrors";
import DeathNote from "../infra/typeorm/entities/DeathNote";
import DeathNoteRepository from "../infra/typeorm/repositories/DeathNoteRepository";

export default class FindDeathNoteByIdService {
  public async execute(id: number): Promise<DeathNote | undefined> {
    const deathNoteRepository = new DeathNoteRepository();

    const deathNote = await deathNoteRepository.findById(id);

    if (!DeathNote) {
      throw new AppError("Nota de falecimento não encontrado");
    }

    return deathNote;
  }
}
