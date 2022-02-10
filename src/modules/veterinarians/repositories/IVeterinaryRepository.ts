import { DeleteResult } from "typeorm";
import IVeterinaryDTO from "../dtos/IVeterinaryDTO";
import Veterinary from "../infra/typeorm/entities/Veterinary";

export default interface IVeterinaryRepository {

  create(data: IVeterinaryDTO): Promise<Veterinary>;
  list(): Promise<Veterinary[]>;
  findById(id: number): Promise<Veterinary | undefined>;
  update(data: IVeterinaryDTO): Promise<Veterinary>;
  delete(id: number): Promise<DeleteResult>;

}
