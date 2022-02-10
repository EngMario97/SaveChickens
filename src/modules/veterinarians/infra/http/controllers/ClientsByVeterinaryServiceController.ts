import { Request, Response } from "express";

import FindClientsByVeterinaryService from "../../../services/FindClientByVeterinaryService";

class ClientsByVeterinaryServiceController {

  async findById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findClientsByVeterinaryService = new FindClientsByVeterinaryService();

    const veterinary = await findClientsByVeterinaryService.execute(Number(id));

    return response.json(veterinary);
  }

}

export default new ClientsByVeterinaryServiceController();