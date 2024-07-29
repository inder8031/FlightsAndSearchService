const { AirportService } = require("../services/index");
const { SuccessCodes } = require("../utils/error-codes");

const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const airport = await airportService.createAirport(req.body);
        return res.status(SuccessCodes.Created).json({
            data: airport,
            success: true,
            message: "Successfully created a airport",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "airport not created",
            err: error
        });
    }
}

const get = async (req, res) => {
    try {
        const airport = await airportService.getAirport(req.params.id);
        return res.status(SuccessCodes.Ok).json({
            data: airport,
            success: true,
            message: "Successfully fetched the airport",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "airport not fetched",
            err: error
        });
    }
}

const update = async (req, res) => {
    try {
        const airport = await airportService.updateAirport(req.params.id, req.body);
        return res.status(SuccessCodes.Ok).json({
            data: airport,
            success: true,
            message: "Successfully updated the airport",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "airport not updated",
            err: error
        });
    }
}

const destroy = async (req, res) => {
    try {
        const response = await airportService.deleteAirport(req.params.id);
        return res.status(SuccessCodes.Ok).json({
            data: response,
            success: true,
            message: "Successfully deleted a airport",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "airport not deleted",
            err: error
        });
    }
}

module.exports = {
    create,
    get,
    update,
    destroy
};