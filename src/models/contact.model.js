import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    asunto: {
        type: String,
        require: true,
    },
    descripcion: {
        type: String,
        require: true,
    },
    nombre: {
        type: String,
    },
    correo: {
        type: String,
    },
}, {
    timestamps: true,
});

export default mongoose.model('contact', contactSchema);