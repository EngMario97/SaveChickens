import Veterinary from "../infra/typeorm/entities/Veterinary";


export default interface IClientsByVeterinaryRepository {

  findById(id: number): Promise<Veterinary | undefined>;

}
