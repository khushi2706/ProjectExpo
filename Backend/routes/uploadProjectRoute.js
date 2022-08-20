const express = require("express");
const UploadPeojectRoute = express.Router();
// const {uploadProject} = require("../controller/uploadProjectController");

const { uploadProject } = require("../controller/ProjectUpload/uploadProject")

UploadPeojectRoute.post("/", uploadProject);

module.exports = UploadPeojectRoute;