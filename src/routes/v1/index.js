const express = require("express");
const router = express.Router();
const cityController = require("../../controllers/city-controller");

router.post("/city", cityController.create);
router.get("/city/:id", cityController.get);
router.patch("/city/:id", cityController.update);
router.delete("/city/:id", cityController.destroy);

module.exports = router;