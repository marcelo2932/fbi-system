import jwt from 'jsonwebtoken';
import { agentes } from '../data/agentes.js';

const SECRET_KEY = 'secreto';

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const agente = agentes.find((agente) => agente.email === email && agente.password === password);

    if (!agente) {
      return res.status(400).json({ message: 'Los datos ingresados No son Correctos, Favor de reingresar datos' });
    }

    const token = jwt.sign({ email: agente.email, nombre: agente.nombre }, SECRET_KEY, { expiresIn: '1m' });

    res.json({ message: 'Login exitoso', token });
  } catch (error) {
    res.status(500).json({ message: 'Error en el proceso de login' });
  }
};