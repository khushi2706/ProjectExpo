"use strict";

var Project = require("../../model/Project"); //const uploadProject = require("../../controller/ProjectUpload/uploadProject");
//const { projectDownload } = require("../../controller/downloadProject/folderDownload");


var _require = require("../../controller/downloadProject/zipper"),
    zipper = _require.zipper; //make api for project download


var DownloadProjectLink = function DownloadProjectLink(req, res, next) {
  var update;
  return regeneratorRuntime.async(function DownloadProjectLink$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          res.set('Access-Control-Allow-Origin', '*'); // const {
          //   ProjectId,
          // } = req.body;
          //const DownloadProjectLink = req.body.DownloadProjectLink

          console.log(DownloadProjectLink);
          _context.prev = 2;
          update = {
            DownloadProjectLink: DownloadProjectLink
          };
          _context.next = 6;
          return regeneratorRuntime.awrap(Project.findByIdAndUpdate(ProjectId, update));

        case 6:
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](2);
          return _context.abrupt("return", res.status(400).json({
            success: false,
            response: {
              error: _context.t0
            }
          }));

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 8]]);
};

exports.projectDownload = function _callee(req, res, next) {
  var _req$body, projectId, folderPath, download;

  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, projectId = _req$body.projectId, folderPath = _req$body.folderPath; //do aws stuff here

          _context2.next = 3;
          return regeneratorRuntime.awrap(zipper({
            s3FolderName: uniqname(projectId),
            startKey: '' // could keep null
            ,
            zipFileName: uniqname(projectId) + '.zip',
            recursive: true
          }));

        case 3:
          download = _context2.sent;
          //do aws stuff here
          // .then(() => {
          //   console.log(`Completed!`);
          // }).catch(err => {
          //   console.log(err);
          // });
          // console.log("file paths: ", allpaths);
          DownloadProjectLink(projectId, download); //save all paths to database  
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
              code: "Project_downloaded"
            }
          }));

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
};