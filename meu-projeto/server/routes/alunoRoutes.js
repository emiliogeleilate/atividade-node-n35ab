// server/routes/alunoRoutes.js
import express from 'express';
import {
  listarAlunos,
  obterAluno,
  criarAluno,
  atualizarAluno,
  deletarAluno
} from '../controllers/alunoController.js';

const router = express.Router();

router.get('/listar', listarAlunos);
router.get('/listaId/:id', obterAluno);
router.post('/criar', criarAluno);
router.put('/:id', atualizarAluno);
router.delete('/excluir/:id', deletarAluno);

// Rota inválida dentro de /alunos/*
router.use((req, res) => {
  res.status(404).json({
    erro: 'Subrota de /alunos não encontrada',
    caminho: req.originalUrl
  });
});

export default router;