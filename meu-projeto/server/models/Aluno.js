import mongoose from 'mongoose';

const alunoSchema = new mongoose.Schema({
    nome: { 
        type: String, 
        required: true,
        minlength: 3,
        maxlength: 100 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true,
        lowercase: true 
    },
    idade: { 
        type: Number,
        min: 0,
        max: 120 
    },
    criadoEm: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Aluno', alunoSchema);