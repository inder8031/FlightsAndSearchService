const { Airport } = require("../models/index");

class AirportRepository {
    async createAirport(instance) {
        try {
            const airport = await Airport.create(instance);
            return airport;
        } catch (error) {
            console.log("Something went wrong in airport repository");
            throw { error };
        }
    }

    async getAirport(airportId) {
        try {
            const airport = await Airport.findByPk(airportId);
            return airport;
        } catch (error) {
            console.log("Something went wrong in airport repository");
            throw { error };
        }
    }

    async updateAirport(airportId, data) {
        try {
            const airport = await Airport.update(data, {
                where: {
                    id: airportId
                }
            });
            return airport;
        } catch (error) {
            console.log("Something went wrong in airport repository");
            throw { error };
        }
    }

    async deleteAirport(airportId) {
        try {
            await Airport.destroy({
                where: {
                    id: airportId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in airport repository");
            throw { error };
        }
    }
}

module.exports = AirportRepository;