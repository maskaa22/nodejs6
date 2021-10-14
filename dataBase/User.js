const { Schema, model } = require('mongoose');

const { userRolesEnumConfig } = require('../config');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        select: false
    },
    role: {
        type: String,
        default: userRolesEnumConfig.USER,
        enum: Object.values(userRolesEnumConfig)
    }
}, { timestamps: true });

module.exports = model('user', userSchema);
