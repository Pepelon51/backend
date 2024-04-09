import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    ap: {
        type: String,
        required: true,
        trim: true
    },
    am: {
        type: String,
        required: true,
        trim: true
    },
    correo: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    lugar_nacimiento: {
        type: String,
        required: true,
        trim: true
    },
    telefono: {
        type: Number,
        required: true,
        trim: true
    },
    nombre_emergencia: {
        type: String,
        required: true,
        trim: true
    },
    correo_emergencia: {
        type: String,
        required: true,
        trim: true
    },
    telefono_emergencia: {
        type: String,
        required: true,
        trim: true
    },
    peso: {
        type: Number,
        required: true,
        trim: true
    },
    tipo_sangre: {
        type: String,
        required: true,
        trim: true
    },
    transtornos_psicologicos: {
        type: Array,
        trim: true
    },
    enfermedades_cronicas: {
        type: Array,
        trim: true
    },
    alergias: {
        type: Array,
        trim: true
    },
    calle: {
        type: String,
        required: true,
        trim: true
    },
    numero: {
        type: Number,
        required: true,
        trim: true
    },
    cp: {
        type: String,
        required: true,
        trim: true
    },
    ciudad: {
        type: String,
        required: true,
        trim: true
    },
    colonia: {
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    edad:{
        type: Number,
        required: true,
    }
}, {
    timestamps: true
});

export default mongoose.model('Usuario', userSchema);
