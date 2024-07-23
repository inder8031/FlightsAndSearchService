const { Op } = require("sequelize");
const { City } = require("../models/index");

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            console.log("error in city repository layer.")
            throw { error };
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("error in city repository layer.")
            throw { error };
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = City.update(data, {
                where: {
                    id: cityId
                }
            });
            return city;
        } catch (error) {
            console.log("error in city repository layer.");
            throw { error };
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("error in city repository.");
            throw { error };
        }
    }

    async getAllCities({ name }) {
        try {
            if(name) {
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("error in city repository.");
            throw { error };
        }
    }
} 

module.exports = CityRepository;