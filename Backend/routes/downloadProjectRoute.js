const express = require("express");
const downloadProjectRoute = express.Router();

const { DownloadProjectLink } = require("../controller/projectController");

downloadProjectRoute.get("/", DownloadProjectLink);

module.exports = downloadProjectRoute;
