const { Airplane } = require("../models/index");
const CrudRepository = require("./crud-repository");

class AirplaneRepository extends CrudRepository {
    constructor () {
        super(Airplane);
    }

    // async getAirplane(id) {
    //     try {
    //         const airplane = Airplane.findByPk(id);
    //         return airplane;
    //     } catch (error) {
    //         console.log("Something went wrong in the airplane repository layer");
    //         throw { error };
    //     }
    // }
}

module.exports = AirplaneRepository;