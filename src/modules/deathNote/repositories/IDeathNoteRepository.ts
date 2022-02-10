import IDeathNoteDTO from "../dtos/IDeathNoteDTO";
import DeathNote from "../infra/typeorm/entities/DeathNote";

export default interface IDeathNoteRepository {
  create(data: IDeathNoteDTO): Promise<DeathNote>;
  findById(id: number): Promise<DeathNote | undefined>;
  filterByClientAndDate(data: IDeathNoteDTO): Promise<DeathNote[]>;
}
