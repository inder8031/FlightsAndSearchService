const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");
const { Op } = require("sequelize");

class FlightService {
    constructor () {
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    #createFilter(data) {
        let filter = {};
        
        if(data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }

        if(data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }

        // if(data.minPrice) {
        //     Object.assign(filter, {price: {[Op.gte]: data.minPrice}});
        // }

        let priceFilter = [];
        if(data.minPrice) {
            let minPrice = {
                price: {
                    [Op.gte]: data.minPrice
                }
            }

            priceFilter.push(minPrice);
        }

        if(data.maxPrice) {
            let maxPrice = {
                price: {
                    [Op.lte]: data.maxPrice
                }
            }

            priceFilter.push(maxPrice);
        }

        return { 
            ...filter,
            [Op.and]: priceFilter
        };
    }

    async createFlight(data) {
        try {
            if(!compareTime(data.arrivalTime, data.departureTime)) {
                throw { error : "Arrival time cannot be less than departure time"};
            }
            const airplane = await this.airplaneRepository.get(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data, totalSeats: airplane.capacity
            });

            return flight;

        } catch (error) {
            console.log("Something went wrong in flight service layer.");
            throw { error };
        }
    }

    async getFlight(id) {
        try {
            const flight = await this.flightRepository.getFlight(id);
            return flight;
        } catch (error) {
            console.log("Something went wrong in flight service layer");
            throw { error };
        }
    }

    async getAllFlights(filter) {
        try {
            // const flights = await this.flightRepository.getAllFlights(filter);
            const filterObj = this.#createFilter(filter);
            const flights = await this.flightRepository.getAllFlights(filterObj);
            return flights;
        } catch (error) {
            console.log("Something went wrong in flight service layer");
            throw { error };
        }
    }
}

module.exports = FlightService;