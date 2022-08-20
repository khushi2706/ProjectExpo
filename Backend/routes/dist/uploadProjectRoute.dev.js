"use strict";

var express = require("express");

var UploadPeojectRoute = express.Router(); // const {uploadProject} = require("../controller/uploadProjectController");

var _require = require("../controller/ProjectUpload/uploadProject"),
    uploadProject = _require.uploadProject;

UploadPeojectRoute.post("/", uploadProject);
module.exports = UploadPeojectRoute;