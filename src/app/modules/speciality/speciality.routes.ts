import { Router } from "express";
import { SpecialityControllers } from "./speciality.controller";

export const specialityRouter = Router();

specialityRouter.post("/", SpecialityControllers.createSpeciality);
