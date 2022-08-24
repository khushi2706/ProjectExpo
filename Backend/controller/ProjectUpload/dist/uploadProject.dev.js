"use strict";

var Project = require("../../model/Project"); //const uploadProject = require("../../controller/ProjectUpload/uploadProject");


var _require = require("../../controller/ProjectUpload/folderUpload"),
    folderUpload = _require.folderUpload; //const axios = require('axios')


function uniqname(pro_id) {
  return pro_id;
}

var UpdateProjectLink = function UpdateProjectLink(ProjectId, UpdatedProjectLink) {
  var update;
  return regeneratorRuntime.async(function UpdateProjectLink$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          res.set('Access-Control-Allow-Origin', '*'); // const {
          //   ProjectId,
          // } = req.body;
          // const UpdatedProjectLink = req.body.UpdatedProjectLink;

          console.log(UpdateProjectLink);
          _context.prev = 2;
          update = {
            ProjectLink: UpdatedProjectLink
          };
          _context.next = 6;
          return regeneratorRuntime.awrap(Project.findByIdAndUpdate(ProjectId, update));

        case 6:
          console.log("Done.....");
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](2);
          console.log("error: ", _context.t0); // return res.status(400).json({
          //     success : false,
          //     response : {
          //         error
          //     }
          // })

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 9]]);
};

exports.uploadProject = function _callee(req, res, next) {
  var _req$body, projectId, folderPath, allpaths;

  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, projectId = _req$body.projectId, folderPath = _req$body.folderPath; //do aws stuff here

          _context2.next = 3;
          return regeneratorRuntime.awrap(folderUpload({
            s3BucketName: "projectexpo-projects",
            // Absolute path
            localFolder: folderPath,
            accessKeyId: "AKIAS6G5ANL5655DKEHC",
            secretAccessKey: "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",
            folder_name: uniqname(projectId)
          }));

        case 3:
          allpaths = _context2.sent;
          // .then(() => {
          //   console.log(`Completed!`);
          // }).catch(err => {
          //   console.log(err);
          // });
          // console.log("file paths: ", allpaths);
          UpdateProjectLink(projectId, allpaths); //save all paths to database  
          // console.log(folderPath);
          //const obj = {  }
          // UpdateProjectLink(projectId, filepaths);
          // axios.put("http://localhost:5000/api/Project/updateProjectLink",{
          //     ProjectId : projectId,
          //     UpdatedProjectLink: JSON.parse(JSON.stringify(obj))
          //   })

          return _context2.abrupt("return", res.status(200).json({
            success: true,
            response: {
              code: "Project_uploaded"
            }
          }));

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
}; // module.exports = { uploadProject }