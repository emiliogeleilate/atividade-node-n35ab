import Aluno from '../models/Aluno.js';

// Listar todos os alunos
export const listarAlunos = async (req, res) => {
    try {
        const alunos = await Aluno.find();
        res.status(200).json(alunos);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

// Obter aluno por ID
export const obterAluno = async (req, res) => {
    try {
        const aluno = await Aluno.findById(req.params.id);
        if (!aluno) return res.status(404).json({ erro: 'Aluno não encontrado' });
        res.status(200).json(aluno);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

// Criar novo aluno
export const criarAluno = async (req, res) => {
    try {
        const novoAluno = await Aluno.create(req.body);
        res.status(201).json(novoAluno);
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

// Atualizar aluno
export const atualizarAluno = async (req, res) => {
    try {
        const alunoAtualizado = await Aluno.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!alunoAtualizado) return res.status(404).json({ erro: 'Aluno não encontrado' });
        res.status(200).json(alunoAtualizado);
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

// Deletar aluno
export const deletarAluno = async (req, res) => {
    try {
        const alunoDeletado = await Aluno.findByIdAndDelete(req.params.id);
        if (!alunoDeletado) return res.status(404).json({ erro: 'Aluno não encontrado' });
        res.status(200).json({ mensagem: 'Aluno deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};