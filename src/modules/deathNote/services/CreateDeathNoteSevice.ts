
import AppError from "../../../shared/errors/AppErrors";
import IDeathNoteDTO from "../dtos/IDeathNoteDTO";
import DeathNote from "../infra/typeorm/entities/DeathNote";
import DeathNoteRepository from "../infra/typeorm/repositories/DeathNoteRepository";

export default class CreateDeathNoteService {
  public async execute(data: IDeathNoteDTO): Promise<DeathNote> {
    const deathNoteRepository = new DeathNoteRepository();
    const deathNoteList = await deathNoteRepository.filterByClientAndDate(data);
    let amountDeath = 0;

    for (let i = 0; i < deathNoteList.length; i++) {
      amountDeath += deathNoteList[i].amount;
    }

    if (amountDeath >= data.mortality_value) {
      await console.log("mensagemmensagemmensagemmensagemmensagemmensagemmensagemmensagemmensagemmensagemmensagemmensagemmensagemmensagemmensagemmensagemmensagemmensagemmensagemmensagemmensagemmensagemmensagemmensagemmensagemmensagemmensagemmensagemmensagemmensagemmensagemmensagemmensagemmensagemmensagemmensagem")
    }

    const deathNote = await deathNoteRepository.create(data);

    return deathNote;
  }
}
