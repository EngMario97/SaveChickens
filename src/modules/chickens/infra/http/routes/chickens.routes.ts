import { Router } from "express";
import ChickensController from "../controllers/ChickensController";

const routes = Router();

routes.post("/", ChickensController.create);

routes.get("/", ChickensController.list);

routes.get("/:id", ChickensController.findById);

routes.put("/:id", ChickensController.update);

//routes.delete("/:id", ChickensController.delete);

export default routes;
