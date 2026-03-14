import { Router } from "express";
import { getEmployeeById, getEmployees } from "../controllers/employees.controllers.js";


const baseUrl = "/api/employees";
const router = Router();

router.get(baseUrl, getEmployees)

router.get(`${baseUrl}/:id`, getEmployeeById)

router.delete(`${baseUrl}/delete/:id`, getEmployeeById)

router.put(`${baseUrl}/edit/:id`, getEmployeeById)

router.patch(`${baseUrl}/:id`, getEmployeeById)

router.post(`${baseUrl}/create`, getEmployeeById)

export default router;
