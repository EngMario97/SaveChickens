import { Router } from "express";
import DeathNoteController from "../controllers/DeathNoteController";

const routes = Router();

routes.post("/", DeathNoteController.create);
routes.get("/:id", DeathNoteController.findById);

export default routes;
