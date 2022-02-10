import { Request, Response } from "express";
import FindAllVeterinariansService from "../../../services/FindAllVeterinariansService";
import CreateVeterinaryService from "../../../services/CreateVeterinaryService";
import FindVeterinaryByIdService from "../../../services/FindVeterinaryByIdService";
import UpdateVeterinaryService from "../../../services/UpdateVeterinaryService";
import DeleteVeterinaryService from "../../../services/DeleteVeterinaryService";

class VeterinariansController {
  async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const createVeterinaryService = new CreateVeterinaryService();

    const veterinary = await createVeterinaryService.execute(data);

    return response.json(veterinary);
  }

  async list(request: Request, response: Response): Promise<Response> {
    const listAllVeterinariansService = new FindAllVeterinariansService();

    const veterinarians = await listAllVeterinariansService.execute();

    return response.json(veterinarians);
  }

  async findById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findVeterinaryById = new FindVeterinaryByIdService();

    const veterinary = await findVeterinaryById.execute(Number(id));

    return response.json(veterinary);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const data = request.body;
    const { id } = request.params;

    const updateVeterinaryService = new UpdateVeterinaryService();

    const data_to_update = {
      ...data,
      id: Number(id),
    };

    const veterinary = await updateVeterinaryService.execute(data_to_update);

    return response.json(veterinary);
  }
  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteVeterinaryService = new DeleteVeterinaryService();

    const result = await deleteVeterinaryService.execute(Number(id));

    return response.json(result);
  }
}

export default new VeterinariansController();