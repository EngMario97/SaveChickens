import Client from "../infra/typeorm/entities/Client";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";

export default class ListClientsService {
    public async execute(): Promise<Client[]> {
       const clientRepository = new ClientRepository();

       const listClients = await clientRepository.listAll();

       return listClients;
    }
}