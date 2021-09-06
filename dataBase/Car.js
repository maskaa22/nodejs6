const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    model: {
        type: String,
        required: true,
        trim: true
    },
    numberInKuzov: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
}, { timestamps: true });

module.exports = model('car', userSchema);
