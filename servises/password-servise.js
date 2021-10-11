const bcrypt = require('bcrypt');
const { ErrorHandler } = require('../errors');

module.exports = {
    hash: (password) => bcrypt.hash(password, 10),
    compare: async (hash, password) => {
        const isPasswordMatced = await bcrypt.compare(password, hash);

        if (!isPasswordMatced) {
            throw new ErrorHandler(400, 'Email or password is wrong');
        }
    }
};
