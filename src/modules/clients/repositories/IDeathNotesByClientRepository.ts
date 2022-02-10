import Client from "../infra/typeorm/entities/Client";


export default interface IDeathNoteByClientRepository {

  findById(id: number): Promise<Client | undefined>;

}
