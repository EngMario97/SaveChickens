import { Router } from "express";
import ClientsController from "../controllers/ClientsController";

const routes = Router();

routes.post("/", ClientsController.create);

routes.get("/", ClientsController.index);

routes.get("/:id", ClientsController.show);

routes.put("/:id", ClientsController.update);

routes.delete("/:id", ClientsController.delete);

export default routes;
