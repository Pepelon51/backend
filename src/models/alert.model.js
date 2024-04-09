import mongoose from 'mongoose';

const alertSchema = new mongoose.Schema({
    fecha: {
        type: Date.now,
        require: true,
    },
    altitud: {
        type: String,
        require: true,
    },
    latitud: {
        type: String,
        require: true,
    },
}, {
    timestamps: true,
});

export default mongoose.model('alert', contactSchema);