module.exports = {
    createdCar: (schema, answer) => schema.create(answer),
    findAllCar: (schema, answer) => schema.find(answer),
    findCarById: (schema, answer) => schema.findById(answer),
    deleteOneCar: (schema, answer) => schema.deleteOne({ _id: answer }),
    updateCarById: (schema, answer, newUser) => schema.updateOne({ _id: answer }, newUser)
};
