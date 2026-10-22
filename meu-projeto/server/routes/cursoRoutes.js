import express from 'express';
import {
  listarCursos,
  obterCurso,
  criarCurso,
  atualizarCurso,
  deletarCurso
} from '../controllers/cursoController.js';

const router = express.Router();

router.get('/listar', listarCursos);
router.get('/listaId/:id', obterCurso);
router.post('/criar', criarCurso);
router.put('/:id', atualizarCurso);
router.delete('/excluir/:id', deletarCurso);

router.use((req, res) => {
  res.status(404).json({
    erro: 'Subrota de /cursos não encontrada',
    caminho: req.originalUrl
  });
});

export default router;