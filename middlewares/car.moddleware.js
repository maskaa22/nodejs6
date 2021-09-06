const Car = require('../dataBase/Car');
const ErrorHandler = require('../errors/errorHandler');
const service = require('../servises');

module.exports = {
    isCarPresent: async (req, res, next) => {
        try {
            const { car_id } = req.params;

            const car = await service.carServise.findCarById(Car, car_id);

            if (!car) {
                throw new ErrorHandler(418, 'car not found');
            }
            req.car = car;

            next();
        } catch (e) {
            next(e);
        }
    },
    checkUniquenumberInKuzov: async (req, res, next) => {
        try {
            const { numberInKuzov } = req.body;

            const numberOfKuzov = await Car.findOne({ numberInKuzov });

            if (numberOfKuzov) {
                throw new ErrorHandler(409, `Number ${numberInKuzov} is already exist`);
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};
