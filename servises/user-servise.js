
const path = require('path');
const fs = require('fs');

const dbPath = path.join(process.cwd(), 'db', 'users.js');

// const getUsers = async () => {
//     try {
//         const data =  fs.readFileSync(dbPath, 'utf-8')
//         return JSON.parse(data);
//
//     } catch (e) {
//         console.log(e);
//     }
// };

const writeUser = async (users) => {
    try {

        const userTextForDb = `module.exports = \n${JSON.stringify(users)}`;

        await fs.writeFileSync(dbPath, userTextForDb);
    } catch (e) {
        console.log(e);
    }
};

module.exports = { writeUser };