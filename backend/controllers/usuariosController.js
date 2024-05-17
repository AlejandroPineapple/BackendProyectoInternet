const Usuario = require('../models/usuariosModel');

const createUser = async (req, res) => {
    const { username, email, password} = req.body;
    try {
        const newUser = new Usuario({ username, email, password});
        await newUser.save();
        res.status(201).json({ message: "Usuario creado exitosamente", userId: newUser._id });
    } catch (error) {
        res.status(500).json({ message: "Error al crear usuario: " + error.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await Usuario.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener usuarios: " + error.message });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await Usuario.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error al buscar el usuario: " + error.message });
    }
};

const getUserByUsername = async (req, res) => {
    const username = req.params.username;
    try {
        const user = await Usuario.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error al buscar el usuario: " + error.message });
    }
};


const updateUser = async (req, res) => {
    const { username, email, password} = req.body;
    try {
        const updatedUser = await Usuario.findByIdAndUpdate(req.params.id, { username, email, password}, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'No se pudo encontrar el usuario para actualizar' });
        }
        res.status(200).json({ message: "Usuario actualizado exitosamente", updatedUser });
    } catch (error) {
        res.status(400).json({ message: "Error al actualizar el usuario: " + error.message });
    }
};

const deleteUser = async (req, res) => {
    const usuarioId = req.params.id;

    try {
        const usuario = await Usuario.findByIdAndDelete(usuarioId);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        return res.status(200).json({ message: 'Usuario eliminado exitosamente' });
    } catch (error) {
        return res.status(500).json({ message: 'Error al eliminar el usuario: ' + error.message });
    }
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    getUserByUsername,
    updateUser,
    deleteUser,
};