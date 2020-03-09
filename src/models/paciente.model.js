import mongoose from 'mongoose';

const PacienteSchema = mongoose.Schema({
    nombre: String,
    edad: Number,
    sexo: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Paciente', PacienteSchema);