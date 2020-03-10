import mongoose from 'mongoose';

const DosificacionSchema = mongoose.Schema({
    dosis: Number,
    medicamento: { type: mongoose.Schema.Types.ObjectId, ref: 'medicamentos'},
    paciente: { type: mongoose.Schema.Types.ObjectId, ref: 'pacientes'},
    alarma: { type: mongoose.Schema.Types.ObjectId, ref: 'alarmas'},
    auditoria: { type: mongoose.Schema.Types.ObjectId, ref: 'auditorias'}
}, {
    timestamps: true
});

module.exports = mongoose.model('Dosificacion', DosificacionSchema);