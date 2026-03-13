# API CRUD de Empleados

API REST desarrollada como proyecto de portfolio que implementa un **CRUD completo** sobre una base de datos SQL.
Permite crear, consultar, actualizar y eliminar registros de empleados.

## Descripción

El proyecto expone endpoints HTTP para operar sobre una tabla llamada `Empleados`.
Cada registro contiene la información básica de un empleado:

* `id` (autoincremental)
* `nombre_completo`
* `sueldo`

La API implementa las operaciones típicas de un CRUD:

* **Create** → crear un empleado
* **Read** → obtener todos los empleados o uno específico
* **Update** → actualizar un empleado completo o campos individuales
* **Delete** → eliminar un empleado

## Estructura de la Base de Datos

La aplicación utiliza una base de datos llamada `api_crud`.

### Crear base de datos

```sql
CREATE DATABASE api_crud;
USE api_crud;
```

### Crear tabla

```sql
CREATE TABLE Empleados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_completo VARCHAR(100) NOT NULL,
    sueldo DECIMAL(10,2) NOT NULL
);
```

### Datos de ejemplo

```sql
INSERT INTO Empleados (nombre_completo, sueldo) VALUES
('Juan Pérez', 1200.00),
('María Gómez', 1350.50),
('Carlos López', 1500.00),
('Ana Martínez', 1420.75),
('Luis Rodríguez', 1600.00),
('Sofía Fernández', 1550.25),
('Pedro Sánchez', 1300.00),
('Lucía Díaz', 1700.90),
('Miguel Torres', 1450.60),
('Valentina Ruiz', 1800.00);
```
