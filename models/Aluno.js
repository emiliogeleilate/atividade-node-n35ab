const mongoose = require('mongoose');

const AlunoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    idade: { type: Number }
});

module.exports = mongoose.model('Aluno', AlunoSchema);