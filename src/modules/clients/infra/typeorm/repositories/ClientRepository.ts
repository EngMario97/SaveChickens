import IClientDTO from "modules/clients/dtos/IClientDTO";
import IClientRepository from "modules/clients/repositories/IClientRepository";
import { getRepository, Repository } from "typeorm";
import Client from "../entities/Client";

/**
 * É nesse arquivo que serão feitas todas as conexões com o banco de dados
 * Ele implementa a Interface de IClientREpository portanto, sempre
 * que precisar de um novo método ele deve ser criado na interface também
 */
export default class ClientRepository implements IClientRepository {
  private ormRepository: Repository<Client>;

  constructor() {
    this.ormRepository = getRepository(Client);
  }

  async create(data: IClientDTO): Promise<Client> {
    const client = this.ormRepository.create(data);
    return this.ormRepository.save(client);
  }

  async listAll(): Promise<Client[]> {
    const listClients = this.ormRepository.find();
    return listClients;
  }

  async findById(id: string): Promise<Client | undefined> {
    const client = this.ormRepository.findOne(id);
    return client;
  }

  async update(data: IClientDTO): Promise<Client> {
    return this.ormRepository.save(data);
  }

  async delete(id: string): Promise<void> {
    const client = this.ormRepository.delete(id);
  }
}
