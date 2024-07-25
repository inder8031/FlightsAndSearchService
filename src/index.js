const express = require("express");
const { PORT } = require("./config/serverConfig.js");
const bodyParser = require("body-parser");
 
const { Airport, City } = require("./models/index");
const db = require("./models/index");

const v1ApiRouter = require("./routes/index");

const setupAndStartServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use("/api", v1ApiRouter);

    app.listen(PORT, async () => {
        console.log(`Server started at PORT ${PORT}`);

        if(process.env.DB_SYNC) {
            await db.sequelize.sync({ alter: true});
            console.log('All models were synchronized successfully.');
        }

        // const city = await City.findOne({
        //     where: {
        //         id: 11
        //     }
        // });
        // console.log(city);

        // const airports = await city.getAirports();
        // console.log(airports);

        // const airports = await Airport.findAll({
        //     include: [{
        //         model: City
        //     }]
        // });

        // console.log(airports);

        const airports = await City.findOne({
            where: {
                id: 11
            },
            include: Airport
        });

        console.log(airports.Airports[0].name);
    });
};

setupAndStartServer(); 