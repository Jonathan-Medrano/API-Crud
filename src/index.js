import express from 'express';
import { PORT } from './config.js';
import employeesroutes from './routes/employees.routes.js';

const app = express();

app.use(express.json());

app.use(employeesroutes)

app.listen(PORT, () => { console.log("Server running on port " + PORT) })