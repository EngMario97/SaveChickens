import Client from "../infra/typeorm/entities/Client";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";

export default class FindByIdService {
    public async execute(id: string): Promise<Client | undefined> {
        const clientRepository = new ClientRepository();

        const client = await clientRepository.findById(id);

        return client;
    }
}