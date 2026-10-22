import express from 'express';
import {
  listarUsers,
  obterUser,
  criarUser,
  atualizarUser,
  deletarUser
} from '../controllers/UsersController.js'; // Ajuste o nome da função se necessário para bater com o seu controller

const router = express.Router();

router.get('/listar', listarUsers);
router.get('/listaId/:id', obterUser);
router.post('/criar', criarUser);
router.put('/:id', atualizarUser);
router.delete('/excluir/:id', deletarUser);

router.use((req, res) => {
  res.status(404).json({
    erro: 'Subrota de /users não encontrada',
    caminho: req.originalUrl
  });
});

export default router;