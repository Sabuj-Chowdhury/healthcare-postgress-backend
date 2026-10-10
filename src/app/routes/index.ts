import { Router } from "express";
import { specialityRouter } from "../modules/speciality/speciality.routes";

export const router = Router();

const moduleRoutes = [
  {
    path: "/speciality",
    route: specialityRouter,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
