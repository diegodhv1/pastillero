import mongoose from 'mongoose';

const AlarmaSchema = mongoose.Schema({
    dia: Date,
    horaIngesta: Date,
    sonido: String,
    volumen: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Alarma', AlarmaSchema);