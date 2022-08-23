const express = require("express");
const downloadProjectRoute = express.Router();

const { DownloadProject } = require("../controller/projectController");

downloadProjectRoute.get("/", DownloadProject);

module.exports = downloadProjectRoute;
