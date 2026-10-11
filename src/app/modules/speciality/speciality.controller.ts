/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { SpecialityServices } from "./speciality.service";

const createSpeciality = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await SpecialityServices.createSpeciality(payload);

    res.status(201).json({
      success: true,
      message: "Speciality created successfully",
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to created successfully",
      error: error instanceof Error ? error.message : "Unknow error",
    });
  }
};

const getAllSpecialities = async (req: Request, res: Response) => {
  try {
    const specialities = await SpecialityServices.getAllSpecialities();
    res.status(200).json({
      success: true,
      message: "All Specialities feteched successfully",
      data: specialities,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch speciality",
      error: error instanceof Error ? error.message : "Unknow error",
    });
  }
};

const deleteSpeciality = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await SpecialityServices.deleteSpeciality(id as string);
    res.status(200).json({
      success: true,
      message: "Speciality deleted successfully",
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch speciality",
      error: error instanceof Error ? error.message : "Unknow error",
    });
  }
};

export const SpecialityControllers = {
  createSpeciality,
  getAllSpecialities,
  deleteSpeciality,
};
