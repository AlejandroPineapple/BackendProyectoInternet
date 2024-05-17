const mongoose = require('mongoose');

const comentarioSchema = new mongoose.Schema({
    texto: {
        type: String,
        required: true
    },
    album: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album',
        required: false
    },
    pelicula: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pelicula',
        required: false
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    creadoEn: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true
    }
});

const Comentario = mongoose.model('Comentario', comentarioSchema);

module.exports = Comentario;