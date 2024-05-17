const express = require('express')
const router = express.Router()

const { getPeliculas, crearPeliculas, updatePeliculas, deletePeliculas, getPeliculaById } = require('../controllers/peliculasController')

router.get('/', getPeliculas)
router.post('/', crearPeliculas)
router.put('/:id', updatePeliculas)
router.delete('/:id', deletePeliculas)
router.get('/:id', getPeliculaById)

module.exports = router