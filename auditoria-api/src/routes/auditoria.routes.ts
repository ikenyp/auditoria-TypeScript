import express, { Request, Response, NextFunction, RequestHandler } from 'express';
import { body, validationResult } from 'express-validator';
import { crearRegistro, obtenerRegistros } from '../controllers/auditoria.controller';

const router = express.Router();

// Validar los datos de entrada y manejar errores
const manejarErrores:RequestHandler=(req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }
        next();
    };

//Validaciones parea crear un registro de auditoría
export const validar:RequestHandler[] =[
    body('usuario')
        .notEmpty()
        .withMessage('El campo usuario es obligatorio'),

    body('accion')
        .notEmpty()
        .withMessage('El campo accion es obligatorio'),

    body('tipo')
        .notEmpty()
        .withMessage('El campo tipo es obligatorio'),
    
    body('codigoDocumento')
        .notEmpty()
        .withMessage('El campo codigo de documento es obligatorio'),

    body('detalleAnterior')
        .isObject()
        .withMessage('El campo detalle anterior debe ser un objeto'),

    body('detalleNuevo')
        .isObject()
        .withMessage('El campo detalle nuevo debe ser un objeto'),
    manejarErrores
];
 

// Ruta para crear un nuevo registro de auditoría
router.post('/', validar, crearRegistro);
// Ruta para obtener todos los registros de auditoría
router.get('/', obtenerRegistros);

export default router;
// Exporta el router para usarlo en el servidor principal