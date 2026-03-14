import { pool } from "../db.js";

//Obtener todos los empleados
export const getEmployees = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM empleados")
    if (result.lenght === 0) {
      res.send("No hay empleados")
    } else {
      res.send(result[0]);
    }
  } catch (error) {
    res.status(404).send({ response: "error al obtener empleados" });
  }
}

//Obtener empleado por ID
export const getEmployeeById = (req, res) => {
  res.send("get employee");
}

//Eliminar empleado
export const deleteEmployeeById = (req, res) => {
  res.send("delete employees");
}

//Editar empleado
export const editEmployeeById = (req, res) => {
  res.send("edit employee");
}

//Crear empleado
export const createEmployee = (req, res) => {
  res.send("create employee");
}

//Editar un atributo de un empleado
export const patchEmployee = (req, res) => {
  res.send("edit employee attribute");
}