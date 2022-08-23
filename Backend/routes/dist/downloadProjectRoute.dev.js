"use strict";

var express = require("express");

var downloadProjectRoute = express.Router();

var _require = require("../controller/projectController"),
    DownloadProject = _require.DownloadProject;

downloadProjectRoute.get("/", DownloadProject);
module.exports = downloadProjectRoute;