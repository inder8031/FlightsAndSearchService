const { ClientErrorCodes } = require("../utils/error-codes");

const validCreateFlight = (req, res, next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    ) {
        return res.status(ClientErrorCodes.Bad_Request).json({
            data: {},
            success: false,
            message: "Invalid request body for creating a flight",
            err: "Missing mandatory properties to create a flight"
        });
    }

    next();
}

module.exports = {
    validCreateFlight
}