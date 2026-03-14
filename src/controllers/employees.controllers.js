import { pool } from "../db.js";

//Obtener todos los empleados
export const getEmployees = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM empleados")
    if (result.length === 0) {
      res.send({ response: "No hay empleados" })
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
      res.send({ response: "Empleado no encontrado" })
    } else {
      res.send(result[0]);
    }
  } catch (error) {
    res.status(500).send({ response: "error al obtener empleado" });
  }
}

//Eliminar empleado
export const deleteEmployeeById = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM empleados WHERE id = ?", [req.params.id])
    if (result.length === 0) {
      res.send({ response: "Empleado no encontrado" })
    } else {
      res.send({ response: "Empleado eliminado correctamente" });
    }
  } catch (error) {
    res.status(500).send({ response: "error al eliminar empleado" });
  }
}

//Editar empleado
export const editEmployeeById = async (req, res) => {
  if (req.body.name && req.body.salary) {
    try {
      const [result] = await pool.query("UPDATE empleados SET nombre_completo = ?, sueldo = ? WHERE id = ?", [req.body.name, req.body.salary, req.params.id])
      if (result.affectedRows === 0) {
        res.send({ response: "Empleado no encontrado" })
      } else {
        res.send({ response: "Empleado actualizado correctamente" });
      }
    } catch (error) {
      res.status(500).send({ response: "error al actualizar empleado" });
    }
  } else {
    if (!req.body.name) {
      res.send({ response: "Falta el nombre" });
    } else if (!req.body.salary) {
      res.send({ response: "Falta el salario" });
    }
  }
}

//Editar un atributo de un empleado
export const patchEmployee = async (req, res) => {
  try {
    const [result] = await pool.query("UPDATE empleados SET nombre_completo = IFNULL(?, nombre_completo), sueldo = IFNULL(?, sueldo) WHERE id = ?", [req.body.name, req.body.salary, req.params.id])
    if (result.affectedRows === 0) {
      res.send({ response: "Empleado no encontrado" })
    } else {
      res.send({ response: "Empleado actualizado correctamente" });
    }
  } catch (error) {
    res.status(500).send({ response: "error al actualizar empleado" });
  }
}

//Crear empleado
export const createEmployee = async (req, res) => {
  if (req.body.name && req.body.salary) {
    try {
      const result = await pool.query("INSERT INTO empleados (nombre_completo, sueldo) VALUES (?, ?)", [req.body.name, req.body.salary])
      if (result.affectedRows === 0) {
        res.send({ response: "Empleado no creado" })
      } else {
        res.send({ response: "Empleado creado correctamente" });
      }
    } catch (error) {
      res.status(500).send({ response: "error al crear empleado" });
    }
  } else {
    if (!req.body.name) {
      res.send({ response: "Falta el nombre" });
    } else if (!req.body.salary) {
      res.send({ response: "Falta el salario" });
    }
  }
}