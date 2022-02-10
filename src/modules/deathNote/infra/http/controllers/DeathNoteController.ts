import { Request, Response } from "express";
import FindDeathNoteByIdService from "../../../services/FindDeathNoteByIdSevice";
import CreateDeathNoteService from "../../../services/CreateDeathNoteSevice";

class DeathNoteController {
  async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const createDeathNoteService = new CreateDeathNoteService();

    const deathNote = await createDeathNoteService.execute(data);

    return response.json(deathNote);
  }

  async findById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findOrderService = new FindDeathNoteByIdService();

    const deathNote = await findOrderService.execute(Number(id));

    return response.json(deathNote);
  }
}

export default new DeathNoteController();
