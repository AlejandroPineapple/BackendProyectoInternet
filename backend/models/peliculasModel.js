const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')

const peliculaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Teclea un nombre, papi"]
    },
    plataforma: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    ano: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: true
    },
    imbd: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Pelicula', peliculaSchema)