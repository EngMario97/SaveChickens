import { Request, Response } from "express";
import CreateClientService from "../../../services/CreateClientService";
import DeleteClientService from "../../../services/DeleteClientService";
import FindByIdService from "../../../services/FindByIdService";
import ListClientsService from "../../../services/ListClientsService";
import UpdateClientService from "../../../services/UpdateClientService";

/**
 * O controller tem acesso as requisições e é o responsável por enviar uma
 * resposta
 *
 * Por padrão ele deve ter no máximo 5 métodos (index, create, show, update e delete)
 */
class ClientsController {
  async create(request: Request, response: Response) {
    const data = request.body;

    const createClientService = new CreateClientService();

    const client = await createClientService.execute(data);

    return response.json(client);
  }

  async index(request: Request, response: Response) {
    const listClientsService = new ListClientsService();

    const listClients = await listClientsService.execute();

    return response.json(listClients);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const findByIdService = new FindByIdService();

    const client = await findByIdService.execute(id);

    return response.json(client);
  }

  async update(request: Request, response: Response) {
    const data = request.body;
    const { id } = request.params;

    const updateClientService = new UpdateClientService();

    const client = await updateClientService.execute(id, data);

    return response.json(client);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteClientService = new DeleteClientService();

    await deleteClientService.execute(id);

    return response.json("Cliente deletado com sucesso.");
  }
}

export default new ClientsController();
