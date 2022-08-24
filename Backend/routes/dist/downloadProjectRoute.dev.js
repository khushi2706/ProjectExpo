"use strict";

var express = require("express");

var downloadProjectRoute = express.Router();

var _require = require("../controller/projectController"),
    DownloadProjectLink = _require.DownloadProjectLink;

downloadProjectRoute.get("/", DownloadProjectLink);
module.exports = downloadProjectRoute;