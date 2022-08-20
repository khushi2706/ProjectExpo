"use strict";

var express = require("express");

var UploadPeojectRoute = express.Router();

var _require = require("../controller/ProjectUpload/uploadProject"),
    UploadProject = _require.UploadProject;

UploadPeojectRoute.post("/", UploadProject);
module.exports = UploadPeojectRoute;