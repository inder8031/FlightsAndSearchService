const express = require("express");
const { PORT } = require("./config/serverConfig.js");
const bodyParser = require("body-parser");
 
const { Airplane } = require("./models/index");
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

        const airplane = await Airplane.create({
            modelNumber: "Cessna 172"
        });

        console.log(airplane);
    });
};

setupAndStartServer(); 