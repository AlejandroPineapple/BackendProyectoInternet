const asyncHandler = require('express-async-handler')
const Pelicula = require('../models/peliculasModel')

const getPeliculas = async(req, res) => {

    try{
    const peliculas = await Pelicula.find()
    res.status(200).json({peliculas})
    } catch {
        res.status(500).json({ message: "Error: " + error.message });
    }
}

const getPeliculaById = async (req, res) => {
    try {
        const pelicula = await Pelicula.findById(req.params.id);
        if (pelicula) {
            res.status(200).json(pelicula);
        } else {
            res.status(404).json({ message: 'Elige otra porque ese no esta bro' });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al buscar la peli: " + error.message });
    }
};

const crearPeliculas = asyncHandler( async(req, res) => {

    if(!req.body.nombre) {
        res.status(400)
        throw new Error('Pon un nombre, papi')
    }

    const pelicula = await Pelicula.create({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        plataforma: req.body.plataforma,
        ano: req.body.ano,
        imagen: req.body.imagen,
        imbd: req.body.imbd
    })

    res.status(201).json(pelicula)
})

const updatePeliculas = asyncHandler( async(req, res) => {

    const pelicula = await Pelicula.findById(req.params.id)

    if(!pelicula) {
        res.status(404)
        throw new Error('Te mereces el gatito malo, la pelicula no existe')
    }

    const peliculaUpdated = await Pelicula.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(peliculaUpdated)
})

const deletePeliculas = asyncHandler( async(req, res) => {

    const pelicula = await Pelicula.findById(req.params.id)

    if(!pelicula) {
        res.status(404)
        throw new Error('Te mereces el gatito malo, la pelicula no existe')
    }

    await Pelicula.deleteOne(pelicula)

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getPeliculas,
    crearPeliculas,
    updatePeliculas,
    deletePeliculas,
    getPeliculaById
}