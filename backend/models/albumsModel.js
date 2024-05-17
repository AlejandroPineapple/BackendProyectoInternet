const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    nombre: { type: String,
        required: true },

    artista: { type: String,
        required: true },

    ano: {
        type: String,
        required: true,
    },

    descripcion: { type: String },

    imagen: { type: String },

    spotify: { type: String },

    appleMusic: { type: String },
});

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;