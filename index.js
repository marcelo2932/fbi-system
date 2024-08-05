import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes.js';
import viewRoutes from './routes/viewRoutes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', authRoutes);
app.use('/', viewRoutes);

app.listen(3001, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});