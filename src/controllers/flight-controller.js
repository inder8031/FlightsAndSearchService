const { FlightService } = require("../services/index");
const { SuccessCodes } = require("../utils/error-codes");

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flightReqData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            departureTime: req.body.departureTime,
            arrivalTime: req.body.arrivalTime,
            price: req.body.price
        }
        const flight = await flightService.createFlight(flightReqData);
        return res.status(SuccessCodes.Created).json({
            data: flight,
            success: true,
            message: "Successfully created a flight",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "flight not created",
            err: error
        });
    }
}

const get = async (req, res) => {
    try {
        const flight = await flightService.getFlight(req.params.id);
        return res.status(201).json({
            data: flight,
            success: true,
            message: "Successfully fetched a flight",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "flight not be fetched",
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const flights = await flightService.getAllFlights(req.query);
        return res.status(201).json({
            data: flights,
            success: true,
            message: "Successfully fetched all flights",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "All flights not be fetched",
            err: error
        });
    }
}

module.exports = {
    create,
    get,
    getAll
};