import { DeleteResult } from "typeorm";
import IChickenDTO from "../dtos/IChickenDTO";
import Chicken from "../infra/typeorm/entities/Chicken";


export default interface IChickenRepository {

  create(data: IChickenDTO): Promise<Chicken>;
  list(): Promise<Chicken[]>;
  findById(id: number): Promise<Chicken | undefined>;
  update(data: IChickenDTO): Promise<Chicken>;
  delete(id: number): Promise<DeleteResult>;

}
