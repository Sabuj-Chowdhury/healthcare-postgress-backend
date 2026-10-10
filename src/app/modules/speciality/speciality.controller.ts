import { Request, Response } from "express";
import { SpecialityServices } from "./speciality.service";

const createSpeciality = async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await SpecialityServices.createSpeciality(payload);

  res.status(201).json({
    success: true,
    message: "Speciality created successfully",
    data: result,
  });
};

export const SpecialityControllers = {
  createSpeciality,
};
