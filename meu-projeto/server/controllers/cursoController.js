import Curso from '../models/Curso.js';

export const listarCursos = async (req, res) => {
    try {
        const cursos = await Curso.find();
        res.status(200).json(cursos);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

export const obterCurso = async (req, res) => {
    try {
        const curso = await Curso.findById(req.params.id);
        if (!curso) return res.status(404).json({ erro: 'Curso não encontrado' });
        res.status(200).json(curso);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

export const criarCurso = async (req, res) => {
    try {
        const novoCurso = await Curso.create(req.body);
        res.status(201).json(novoCurso);
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

export const atualizarCurso = async (req, res) => {
    try {
        const cursoAtualizado = await Curso.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!cursoAtualizado) return res.status(404).json({ erro: 'Curso não encontrado' });
        res.status(200).json(cursoAtualizado);
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

export const deletarCurso = async (req, res) => {
    try {
        const cursoDeletado = await Curso.findByIdAndDelete(req.params.id);
        if (!cursoDeletado) return res.status(404).json({ erro: 'Curso não encontrado' });
        res.status(200).json({ mensagem: 'Curso deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};