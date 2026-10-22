const mongoose = require('mongoose');

const CursoSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    cargaHoraria: { type: Number, required: true },
    descricao: { type: String }
});

module.exports = mongoose.model('Curso', CursoSchema);