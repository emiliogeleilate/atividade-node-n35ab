import User from '../models/Users.js';

export const listarUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

export const obterUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ erro: 'Utilizador não encontrado' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

export const criarUser = async (req, res) => {
    try {
        const novoUser = await User.create(req.body);
        res.status(201).json(novoUser);
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

export const atualizarUser = async (req, res) => {
    try {
        const userAtualizado = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!userAtualizado) return res.status(404).json({ erro: 'Utilizador não encontrado' });
        res.status(200).json(userAtualizado);
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

export const deletarUser = async (req, res) => {
    try {
        const userDeletado = await User.findByIdAndDelete(req.params.id);
        if (!userDeletado) return res.status(404).json({ erro: 'Utilizador não encontrado' });
        res.status(200).json({ mensagem: 'Utilizador deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};