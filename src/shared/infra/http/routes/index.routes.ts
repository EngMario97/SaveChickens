import { Router } from "express";
import veterinariansRoutes from "../../../../modules/veterinarians/infra/http/routes/veterinarians.routes";
import clientsRoutes from "../../../../modules/clients/infra/http/routes/clients.routes";
import chickensRoutes from "../../../../modules/chickens/infra/http/routes/chickens.routes";
import deathNoteRoutes from "../../../../modules/deathNote/infra/http/routes/deathNote.routes";


const routes = Router();

routes.use("/veterinarians", veterinariansRoutes);

routes.use("/clients", clientsRoutes);

routes.use("/chickens", chickensRoutes);

routes.use("/deathnote", deathNoteRoutes);

export default routes;
