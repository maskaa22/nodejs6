const bcrypt = require('bcrypt');

const { ErrorHandler } = require('../errors');
const { statusCode, messageCode } = require('../config');

module.exports = {
    hash: (password) => bcrypt.hash(password, 10),
    compare: async (password, hash) => {
        const isPasswordMatced = await bcrypt.compare(password, hash);

        if (!isPasswordMatced) {
            throw new ErrorHandler(statusCode.BAD_REQUEST, messageCode.WRONG_LOGINING);
        }
    }
};
