"use strict";

var Project = require("../../model/Project"); //const uploadProject = require("../../controller/ProjectUpload/uploadProject");
//const folderupload = require("../../controller/ProjectUpload/folderupload");


var axios = require('axios');

var UploadProject = function UploadProject(req, res, next) {
  var _req$body, projectId, folderPath, obj;

  return regeneratorRuntime.async(function UploadProject$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, projectId = _req$body.projectId, folderPath = _req$body.folderPath; //do aws stuff here

          console.log(folderPath);
          obj = {
            key: "new",
            key2: "new"
          };
          axios.put("http://localhost:5000/api/Project/updateProjectLink", {
            ProjectId: projectId,
            UpdatedProjectLink: JSON.parse(JSON.stringify(obj))
          });
          return _context.abrupt("return", res.status(200).json({
            success: true,
            response: {
              code: "Project_uploaded_updated"
            }
          }));

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

module.exports = {
  UploadProject: UploadProject
};