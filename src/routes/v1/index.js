const express = require("express");
const router = express.Router();
const cityController = require("../../controllers/city-controller");
const airportController = require("../../controllers/airport-controller");

router.post("/city", cityController.create);
router.get("/city/:id", cityController.get);
router.patch("/city/:id", cityController.update);
router.delete("/city/:id", cityController.destroy);
router.get("/cities", cityController.getAll);
router.post("/cities", cityController.createAll);
router.get("/city/:id/airports", cityController.getAllCityAirports);

router.post("/airport", airportController.create);
router.get("/airport/:id", airportController.get);
router.patch("/airport/:id", airportController.update);
router.delete("/airport/:id", airportController.destroy);

module.exports = router;