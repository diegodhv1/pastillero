import mongoose from 'mongoose';

const AuditoriaSchema = mongoose.Schema({
    ingesta: Boolean
}, {
    timestamps: true
});

module.exports = mongoose.model('Auditoria', AuditoriaSchema);