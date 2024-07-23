const { CityRepository } = require("../repository/index");

class CityService {
    constructor () {
        this.cityService = new CityRepository();
    }

    async getCity(cityId) {
        try {
            const city = await this.cityService.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in city service.");
            throw { error };
        }
    }

    async createCity({ name }) {
        try {
            const city = await this.cityService.createCity({ name });
            return city;
        } catch (error) {
            console.log("Something went wrong in city service.");
            throw { error };
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await this.cityService.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("Something went wrong in city service.");
            throw { error };
        }
    }

    async deleteCity(cityId) {
        try {
            const res = await this.cityService.deleteCity(cityId);
            return res;
        } catch (error) {
            console.log("Something went wrong in city service.");
            throw { error };
        }
    }

    async getAllCities(filter) {
        try {
            const cities = await this.cityService.getAllCities({name: filter.name});
            return cities;
        } catch (error) {
            console.log("Something went wrong in city service.");
            throw { error };
        }
    } 
}

module.exports = CityService;