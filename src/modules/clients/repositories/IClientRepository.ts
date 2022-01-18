import IClientDTO from "../dtos/IClientDTO";
import Client from "../infra/typeorm/entities/Client";

/**
 * Interface que define quais serão os métodos do repositório de Clientes
 * Todos os métodos que o repositório terá devem ser primeiramente definidos aqui
 */
export default interface IClientRepository {
  /**
   * data são os dados do Cliente, deve ter o tipo IClientDTO
   * Promise<Client> é o tipo do retorno do método
   */
  create(data: IClientDTO): Promise<Client>;

  listAll(): Promise<Client[]>;

  findById(id: string): Promise<Client | undefined>;

  update(data: IClientDTO): Promise<Client>;

  delete(id: string): Promise<void>;
}
