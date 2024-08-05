import path from 'path';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'secreto';
const __dirname = path.resolve();

export const getIndex = async (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/index.html'));
};

export const getPrivada = async (req, res) => {
  try {
    const { token } = req.query;
    jwt.verify(token, SECRET_KEY);
    res.sendFile(path.resolve(__dirname, './views/privada.html'));
  } catch (error) {
    let status = 500;
    let message = 'Error al cargar la vista.';
    if (error.message === 'jwt must be provided') {
      status = 400;
      message = 'Debe proporcionar un token válido para esta sección de la app.';
    } else if (error.message === 'Clave Inválida') {
      status = 401;
      message = 'Debe proporcionar un token válido, intente haciendo nuevamente un login.';
    }
    res.status(status).json({ message });
  }
};