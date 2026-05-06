const User = require('../models/userModel');

exports.getAll = async (request,response) => {
    try {
        const users = await User.getAll();
        response.json(users);
    } catch (error) {
        response.status(500).json({
            error:error.message
        });
    }
};

exports.create = async (request,response) => {
    try {
        const result = await User.create(request.body);
        response.json(result);
    } catch (error) {
        response.status(500).json({
            error:error.message
        });
    }
};