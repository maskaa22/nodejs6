const bcrypt = require('bcrypt');
const { ErrorHandler } = require('../errors');

module.exports = {
    hash: (password) => bcrypt.hash(password, 10),
    compare: async (password, hash) => {
        console.log('11111');
        const isPasswordMatced = await bcrypt.compare(password, hash);
        console.log('2222');

        if (!isPasswordMatced) {
            throw new ErrorHandler(400, 'Email or password is wrong');
        }
    }
};
