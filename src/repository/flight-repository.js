const { Flight } = require("../models/index");
// const { Op } = require("sequelize");

class FlightRepository {

    // #createFilter(data) {
    //     let filter = {};
        
    //     if(data.arrivalAirportId) {
    //         filter.arrivalAirportId = data.arrivalAirportId;
    //     }

    //     if(data.departureAirportId) {
    //         filter.departureAirportId = data.departureAirportId;
    //     }

    //     // if(data.minPrice) {
    //     //     Object.assign(filter, {price: {[Op.gte]: data.minPrice}});
    //     // }

    //     let priceFilter = [];
    //     if(data.minPrice) {
    //         let minPrice = {
    //             price: {
    //                 [Op.gte]: data.minPrice
    //             }
    //         }

    //         priceFilter.push(minPrice);
    //     }

    //     if(data.maxPrice) {
    //         let maxPrice = {
    //             price: {
    //                 [Op.lte]: data.maxPrice
    //             }
    //         }

    //         priceFilter.push(maxPrice);
    //     }

    //     return { 
    //         ...filter,
    //         [Op.and]: priceFilter
    //     };
    // }

    async createFlight(data) {
        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the flight repository layer");
            throw { error };
        }
    }

    async getFlight(id) {
        try {
            const flight = await Flight.findByPk(id);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the flight repository layer");
            throw { error };
        }
    }

    async getAllFlights(filter) {
        try {
            // const filterObj = this.#createFilter(filter);
            // const flights = await Flight.findAll({
            //     where: filterObj
            // });
            const flights = await Flight.findAll({
                where: filter
            });
            return flights;
        } catch (error) {
            console.log("Something went wrong in the flight repository layer");
            throw { error };
        }
    }
}

module.exports = FlightRepository;