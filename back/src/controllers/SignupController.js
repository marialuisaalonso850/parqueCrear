const User = require('../models/user');
const { jsonResponse } = require('./jsonResponse');
const sendConfirmationEmail = require('../routes/correos');

exports.createUser = async (req, res) => {
    const { username, name, password } = req.body;

    if (!username || !name || !password) {
        return res.status(400).json(jsonResponse(400, { error: 'Todos los campos son requeridos.' }));
    }

    try {
        const exists = await User.usernameExist(username);

        if (exists) {
            return res.status(400).json(jsonResponse(400, { error: 'El nombre de usuario ya existe.' }));
        }

        const newUser = new User({ username, name, password });
        await newUser.save();
        sendConfirmationEmail(username);

        res.status(200).json(jsonResponse(200, { message: 'Usuario creado.' }));
    } catch (error) {
        console.error(error);
        res.status(500).json(jsonResponse(500, { error: 'Error al crear un usuario.' }));
    }
};