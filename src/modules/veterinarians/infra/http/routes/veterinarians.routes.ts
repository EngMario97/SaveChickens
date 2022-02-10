import { Router } from "express";
import VeterinariansController from "../controllers/VeterinariansController";
import ClientsByVeterinaryServiceController from "../../../../clients/infra/http/controllers/ClientsByVeterinaryServiceController";
const routes = Router();

routes.post("/", VeterinariansController.create);

routes.get("/", VeterinariansController.list);

routes.get("/:id", VeterinariansController.findById);

routes.get("/:id/clients", ClientsByVeterinaryServiceController.findById);

routes.put("/:id", VeterinariansController.update);

//routes.delete("/:id", VeterinariansController.delete);

export default routes;
