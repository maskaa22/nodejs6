module.exports = {
    createdUser: (schema, answer) => schema.create(answer),
    findAllUser: (schema, answer) => schema.find(answer),
    findOneUser: (schema, answer) => schema.findOne({ email: answer }),
    findUserById: (schema, answer) => schema.findById(answer),
    deleteOneUser: (schema, answer) => schema.deleteOne({ _id: answer }),
    updateUserById: (schema, answer, newUser) => schema.updateOne({ _id: answer }, newUser)
};
