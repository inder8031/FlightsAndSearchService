const { AirplaneService } = require("../services/index");
const { SuccessCodes } = require("../utils/error-codes");

const airplaneService = new AirplaneService();

const get = async (req, res) => {
    try {
        const airplane = await airplaneService.get(req.params.id);
        return res.status(SuccessCodes.Ok).json({
            data: airplane,
            success: true,
            message: "Successfully fetched a airplane",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Airplane cannot be not fetched",
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const airplanes = await airplaneService.getAll(req.query);
        return res.status(200).json({
            data: airplanes,
            success: true,
            message: "Successfully fetched all airplanes",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Airplanes not fetched",
            err: error
        });
    }
}

module.exports = {
    get,
    getAll 
}