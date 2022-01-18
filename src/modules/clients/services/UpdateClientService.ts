import IClientDTO from "../dtos/IClientDTO";
import Client from "../infra/typeorm/entities/Client";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";

export default class UpdateClientService {
    public async execute(id: string, data: IClientDTO,): Promise<Client> {
        
        data.id = Number (id);
        
        const clientRepository = new ClientRepository();

        const client = await clientRepository.update(data);

        return client;
    }
}