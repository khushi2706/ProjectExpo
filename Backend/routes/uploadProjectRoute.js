const express = require("express");
const UploadPeojectRoute = express.Router();

const { UploadProject } = require("../controller/ProjectUpload/uploadProject")

UploadPeojectRoute.post("/",UploadProject);

module.exports = UploadPeojectRoute;