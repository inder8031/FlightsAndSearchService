const { CityRepository } = require("../repository/index");

class CityService {
    constructor () {
        this.cityRepository = new CityRepository();
    }

    async getCity(cityId) {
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in city service.");
            throw { error };
        }
    }

    async createCity({ name }) {
        try {
            const city = await this.cityRepository.createCity({ name });
            return city;
        } catch (error) {
            console.log("Something went wrong in city service.");
            throw { error };
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await this.cityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("Something went wrong in city service.");
            throw { error };
        }
    }

    async deleteCity(cityId) {
        try {
            const res = await this.cityRepository.deleteCity(cityId);
            return res;
        } catch (error) {
            console.log("Something went wrong in city service.");
            throw { error };
        }
    }

    async getAllCities(filter) {
        try {
            const cities = await this.cityRepository.getAllCities({name: filter.name});
            return cities;
        } catch (error) {
            console.log("Something went wrong in city service.");
            throw { error };
        }
    } 

    async createAllCities({ list }) {
        try {
            const cities = await this.cityRepository.createAllCities(list);
            return cities;
        } catch (error) {
            console.log("Something went wrong in city service.");
            throw { error };
        }
    }
    
    async getAllCityAirports(cityId) {
        try {
            const cityAirports = await this.cityRepository.getAllCityAirports(cityId);
            return cityAirports;
        } catch (error) {
            console.log("Something went wrong in city service.");
            throw { error };
        }
    } 
}

module.exports = CityService;