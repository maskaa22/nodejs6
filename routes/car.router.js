const router = require('express').Router();

const { carController } = require('../controlles');
const { carMiddleware } = require('../middlewares');

router.get('/', carController.getAllCars);

router.post('/', carMiddleware.checkUniquenumberInKuzov, carController.createCar);

router.get('/:car_id', carMiddleware.isCarPresent, carController.getSingleCars);

router.delete('/:car_id', carMiddleware.isCarPresent, carController.deleteCar);

router.patch('/:car_id', carMiddleware.isCarPresent, carController.updateCar);

module.exports = router;
