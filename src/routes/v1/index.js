const express = require("express");
const router = express.Router();
const { CityController, AirportController, FlightController, AirplaneController } = require("../../controllers/index");

router.post("/city", CityController.create);
router.get("/city/:id", CityController.get);
router.patch("/city/:id", CityController.update);
router.delete("/city/:id", CityController.destroy);
router.get("/cities", CityController.getAll);
router.post("/cities", CityController.createAll);
router.get("/city/:id/airports", CityController.getAllCityAirports);

router.post("/airport", AirportController.create);
router.get("/airport/:id", AirportController.get);
router.patch("/airport/:id", AirportController.update);
router.delete("/airport/:id", AirportController.destroy);

router.post("/flights", FlightController.create)
router.get("/flights", FlightController.getAll);
router.get("/flights/:id", FlightController.get);

router.get("/airplanes", AirplaneController.getAll);
router.get("/airplanes/:id", AirplaneController.get);

module.exports = router;