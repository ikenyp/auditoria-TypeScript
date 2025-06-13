import { Request, Response } from "express";
import Auditoria, {IAuditoria} from "../models/Auditoria";

export const crearRegistro = async (req: Request, res: Response): Promise<void> => {
    try {
        const nuevo = new Auditoria(req.body as IAuditoria);
        const guardado = await nuevo.save();
        res.status(201).json(guardado);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const obtenerRegistros = async (req: Request, res: Response): Promise<void> => {
    try {
        const registros = await Auditoria.find();
        res.status(200).json(registros);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};