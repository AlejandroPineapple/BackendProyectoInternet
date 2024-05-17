const express = require('express');
const router = express.Router({ mergeParams: true });
const comentariosController = require('../controllers/comentariosController');

router.get('/', comentariosController.getCommentsByAlbum);
router.post('/', comentariosController.createComment);
router.delete('/:comentarioId', comentariosController.deleteComment);

module.exports = router;