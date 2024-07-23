const express = require("express");
const { PORT } = require("./config/serverConfig.js");
const bodyParser = require("body-parser");

const v1ApiRouter = require("./routes/index");

const setupAndStartServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use("/api", v1ApiRouter);

    app.listen(PORT, () => {
        console.log(`Server started at PORT ${PORT}`);
    });
};

setupAndStartServer(); 