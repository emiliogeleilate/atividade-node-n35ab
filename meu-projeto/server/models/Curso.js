import mongoose from 'mongoose';

const cursoSchema = new mongoose.Schema({
    titulo: { 
        type: String, 
        required: true 
    },
    cargaHoraria: { 
        type: Number, 
        required: true 
    },
    descricao: { 
        type: String 
    },
    ativo: {
        type: Boolean,
        default: true
    }
});

export default mongoose.model('Curso', cursoSchema);