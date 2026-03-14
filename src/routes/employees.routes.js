import { Router } from "express";
import { createEmployee, deleteEmployeeById, editEmployeeById, getEmployeeById, getEmployees, patchEmployee } from "../controllers/employees.controllers.js";


const baseUrl = "/api/employees";
const router = Router();

router.get(baseUrl, getEmployees)

router.get(`${baseUrl}/:id`, getEmployeeById)

router.delete(`${baseUrl}/delete/:id`, deleteEmployeeById)

router.put(`${baseUrl}/edit/:id`, editEmployeeById)

router.patch(`${baseUrl}/:id`, patchEmployee)

router.post(`${baseUrl}/create`, createEmployee)

export default router;
