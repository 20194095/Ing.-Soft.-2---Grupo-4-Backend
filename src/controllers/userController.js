import usuarioRepository from '../repositories/userRepository.js';

const getAllUsuarios = async (req, res) => {
    const usuarios = await usuarioRepository.findAll();
    res.status(200).json(usuarios);
};

const getUsuarioById = async (req, res) => {
    const usuario = await usuarioRepository.findById(req.params.id);
    if (usuario) {
        res.status(200).json(usuario);
    } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
    }
};

const createUsuario = async (req, res) => {
    const newUsuario = req.body;
    const createdUsuario = await usuarioRepository.create(newUsuario);
    res.status(201).json(createdUsuario);
};

const updateUsuario = async (req, res) => {
    const updatedUsuario = req.body;
    const success = await usuarioRepository.update(req.params.id, updatedUsuario);
    if (success) {
        res.status(200).json({ message: 'Usuario actualizado exitosamente' });
    } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
    }
};

const deleteUsuario = async (req, res) => {
    const success = await usuarioRepository.remove(req.params.id);
    if (success) {
        res.status(200).json({ message: 'Usuario eliminado exitosamente' });
    } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
    }
};

export default { getAllUsuarios, getUsuarioById, createUsuario, updateUsuario, deleteUsuario };
