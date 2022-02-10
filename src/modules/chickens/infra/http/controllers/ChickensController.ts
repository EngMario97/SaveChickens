import { Request, Response } from "express";
import FindAllChickensService from "../../../services/FindAllChickensService";
import CreateChickenService from "../../../services/CreateChickenService";
import FindChickenByIdService from "../../../services/FindChickenByIdService";
import UpdateChickenService from "../../../services/UpdateChickenService";
import DeleteChickenService from "../../../services/DeleteChickenService";

class ChickensController {
  async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const createChickenService = new CreateChickenService();

    const chicken = await createChickenService.execute(data);

    return response.json(chicken);
  }

  async list(request: Request, response: Response): Promise<Response> {
    const listAllChickensService = new FindAllChickensService();

    const chickens = await listAllChickensService.execute();

    return response.json(chickens);
  }

  async findById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findChickenById = new FindChickenByIdService();

    const chicken = await findChickenById.execute(Number(id));

    return response.json(chicken);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const data = request.body;
    const { id } = request.params;

    const updateChickenService = new UpdateChickenService();

    const data_to_update = {
      ...data, // rest / spread operator
      id: Number(id),
    };

    const chicken = await updateChickenService.execute(data_to_update);

    return response.json(chicken);
  }
  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteChickenService = new DeleteChickenService();

    const result = await deleteChickenService.execute(Number(id));

    return response.json(result);
  }
}

export default new ChickensController();