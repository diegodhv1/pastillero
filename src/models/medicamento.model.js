import mongoose from 'mongoose';

const MedicamentoSchema = mongoose.Schema({
    nombre: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Medicamento', MedicamentoSchema);