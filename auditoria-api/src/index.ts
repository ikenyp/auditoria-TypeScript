import express from 'express';
import mongoose from 'mongoose';
import auditoriaRoutes from './routes/auditoria.routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/auditoria', auditoriaRoutes);

//Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/auditoria1')
    .then(() => {
        console.log('Conectado a MongoDB');
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
            });
    })
    .catch((error) => {
        console.error('Error al conectar a MongoDB:', error);
    });
