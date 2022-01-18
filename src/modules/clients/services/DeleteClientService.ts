import IClientDTO from "../dtos/IClientDTO";
import Client from "../infra/typeorm/entities/Client";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";

export default class DeleteClientService {
    public async execute(id: string): Promise<void> {
        const clientRepository = new ClientRepository();

        await clientRepository.delete(id);
    }
    
}