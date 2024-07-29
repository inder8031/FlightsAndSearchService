const { CityService } = require("../services/index");
const { SuccessCodes } = require("../utils/error-codes");

const cityService = new CityService();

const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(SuccessCodes.Created).json({
            data: city,
            success: true,
            message: "Successfully created a city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "city not created",
            err: error
        });
    }
}

const get = async (req, res) => {
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(SuccessCodes.Created).json({
            data: city,
            success: true,
            message: "Successfully fetched the city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "city not fetched",
            err: error
        });
    }
}

const update = async (req, res) => {
    try {
        const city = await cityService.updateCity(req.params.id, req.body);
        return res.status(SuccessCodes.Ok).json({
            data: city,
            success: true,
            message: "Successfully updated the city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "city not updated",
            err: error
        });
    }
}

const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(SuccessCodes.Ok).json({
            data: response,
            success: true,
            message: "Successfully deleted a city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "city not deleted",
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const cities = await cityService.getAllCities(req.query);
        return res.status(SuccessCodes.Ok).json({
            data: cities,
            success: true,
            message: "Successfully fetched all cities",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "cities not fetched",
            err: error
        });
    }
}

const createAll = async (req, res) => {
    try {
        const cities = await cityService.createAllCities(req.body);
        return res.status(SuccessCodes.Created).json({
            data: cities,
            success: true,
            message: "Successfully created all cities",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "cities not created",
            err: error
        });
    }
}

const getAllCityAirports = async (req, res) => {
    try {
        const cityAirports = await cityService.getAllCityAirports(req.params.id);
        return res.status(SuccessCodes.Ok).json({
            data: cityAirports,
            success: true,
            message: "Successfully fetched all airports of a city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "airports of a city not fetched",
            err: error
        });
    }
}

module.exports = {
    create,
    get,
    update,
    destroy,
    getAll,
    createAll,
    getAllCityAirports 
};