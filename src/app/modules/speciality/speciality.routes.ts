import { Router } from "express";
import { SpecialityControllers } from "./speciality.controller";

export const specialityRouter = Router();

specialityRouter.get("/", SpecialityControllers.getAllSpecialities);
specialityRouter.post("/", SpecialityControllers.createSpeciality);
specialityRouter.delete("/:id", SpecialityControllers.deleteSpeciality);
