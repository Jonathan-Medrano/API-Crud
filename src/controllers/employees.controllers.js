import { pool } from "../db.js";

//Obtener todos los empleados
export const getEmployees = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM empleados")
    if (result.length === 0) {
      res.send("No hay empleados")
    } else {
      res.send(result[0]);
    }
  } catch (error) {
    res.status(500).send({ response: "error al obtener empleados" });
  }
}

//Obtener empleado por ID
export const getEmployeeById = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM empleados WHERE id = ?", [req.params.id])
    if (result.length === 0) {
      res.send("Empleado no encontrado")
    } else {
      res.send(result[0]);
    }
  } catch (error) {
    res.status(500).send({ response: "error al obtener empleado" });
  }
}

//Eliminar empleado
export const deleteEmployeeById = async (req, res) => {
  res.send("delete employees");
}

//Editar empleado
export const editEmployeeById = async (req, res) => {
  res.send("edit employee");
}

//Crear empleado
export const createEmployee = async (req, res) => {
  res.send("create employee");
}

//Editar un atributo de un empleado
export const patchEmployee = async (req, res) => {
  res.send("edit employee attribute");
}