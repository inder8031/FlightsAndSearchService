const { AirportRepository } = require("../repository/index");

const airportRepository = new AirportRepository();

class AirportService {
    // constructor() {
    //     this.airportRepository = new AirportRepository();
    // }

    async createAirport(instance) {
        try {
            const airport = await airportRepository.createAirport(instance);
            return airport;
        } catch (error) {
            console.log("Something went wrong in airport service.");
            throw { error };
        }
    }

    async getAirport(airportId) {
        try {
            const airport = await airportRepository.getAirport(airportId);
            return airport;
        } catch (error) {
            console.log("Something went wrong in airport service.");
            throw { error };
        }
    }

    async updateAirport(airportId, data) {
        try {
            const airport = await airportRepository.updateAirport(airportId, data);
            return airport;
        } catch (error) {
            console.log("Something went wrong in airport service.");
            throw { error };
        }
    }

    async deleteAirport(airportId) {
        try {
            const response = await airportRepository.deleteAirport(airportId);
            return response;;
        } catch (error) {
            console.log("Something went wrong in airport service.");
            throw { error };
        }
    }
}

module.exports = AirportService;