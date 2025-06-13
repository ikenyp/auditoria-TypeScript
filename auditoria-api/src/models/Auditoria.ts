import { Schema, model, Document } from 'mongoose';

// Interfaz que respresenta una auditoria
export interface IAuditoria extends Document {
    usuario: string;
    accion: string;
    tipo: string;
    codigoDocumento: string;
    detalleAnterior: Record<string, any>;
    detalleNuevo: Record<string, any>;
    createdAt?: Date;
    updatedAt?: Date;
}

// Esquema de Mongoose para la auditoría
const Auditoria1Schema = new Schema<IAuditoria>({
    usuario: { type: String, required: true },
    accion: { type: String, required: true },
    tipo: { type: String, required: true },
    codigoDocumento: { type: String, required: true },
    detalleAnterior: { type: Object, default: {} },
    detalleNuevo: { type: Object, default: {} },
    },
    { timestamps: true } // Agrega createdAt y updatedAt automáticamente
);

//Exporta el modelo de Mongoose
export default model<IAuditoria>('Auditoria', Auditoria1Schema);