const Car = require('../dataBase/Car');
const service = require('../servises');

module.exports = {
    // eslint-disable-next-line require-await
    getSingleCars: async (req, res, next) => {
        try {
            res.json(req.car);
        } catch (e) {
            next(e);
        }
    },
    createCar: async (req, res, next) => {
        try {
            const createdCar = await service.carServise.createdCar(Car, req.body);

            res.json(createdCar);
        } catch (e) {
            next(e);
        }
    },
    getAllCars: async (req, res, next) => {
        try {
            const { allCars } = req;
            const cars = await service.carServise.findAllCar(Car, allCars);

            res.json(cars);
        } catch (e) {
            next(e);
        }
    },
    deleteCar: async (req, res, next) => {
        try {
            const { car_id } = req.params;

            await service.carServise.deleteOneCar(Car, car_id);

            res.json(`Car with id ${car_id} is deleted`);
        } catch (e) {
            next(e);
        }
    },
    updateCar: async (req, res, next) => {
        try {
            const { car_id } = req.params;
            const newCar = req.body;

            await service.carServise.updateCarById(Car, car_id, newCar);

            res.json(`Car with id ${car_id} is update`);
        } catch (e) {
            next(e);
        }
    }
};
