"use strict";

var Project = require("../model/Project");

var User = require("../model/User");

var getAllProjects = function getAllProjects(req, res, next) {
  var projects;
  return regeneratorRuntime.async(function getAllProjects$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          res.set('Access-Control-Allow-Origin', '*');
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(Project.find());

        case 4:
          projects = _context.sent;
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);

        case 10:
          if (projects) {
            _context.next = 12;
            break;
          }

          return _context.abrupt("return", res.status(404).json({
            success: false,
            response: {
              code: Project_Found_fail,
              message: "Project not found"
            }
          }));

        case 12:
          return _context.abrupt("return", res.status(200).json({
            projects: projects
          }));

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 7]]);
};

var getProjectById = function getProjectById(req, res, next) {
  var ProId, project;
  return regeneratorRuntime.async(function getProjectById$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          res.set('Access-Control-Allow-Origin', '*');
          ProId = req.params.id;
          res.set('Access-Control-Allow-Origin', '*');
          _context2.prev = 3;
          _context2.next = 6;
          return regeneratorRuntime.awrap(Project.findById(ProId));

        case 6:
          project = _context2.sent;
          _context2.next = 12;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](3);
          return _context2.abrupt("return", console.log(_context2.t0));

        case 12:
          if (project) {
            _context2.next = 14;
            break;
          }

          return _context2.abrupt("return", res.status(500).json({
            message: "not Found"
          }));

        case 14:
          return _context2.abrupt("return", res.status(200).json({
            project: project
          }));

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[3, 9]]);
};

var getProjectByUserId = function getProjectByUserId(req, res, next) {
  var UserId, project;
  return regeneratorRuntime.async(function getProjectByUserId$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          UserId = req.params;
          res.set('Access-Control-Allow-Origin', '*');
          _context3.prev = 2;
          _context3.next = 5;
          return regeneratorRuntime.awrap(Project.find(UserId));

        case 5:
          project = _context3.sent;
          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](2);
          return _context3.abrupt("return", console.log(_context3.t0));

        case 11:
          if (project) {
            _context3.next = 13;
            break;
          }

          return _context3.abrupt("return", res.status(500).json({
            message: "not Found"
          }));

        case 13:
          return _context3.abrupt("return", res.status(200).json({
            project: project
          }));

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[2, 8]]);
};

var addNewProject = function addNewProject(req, res, next) {
  var _req$body, PName, Desc, Tags, PType, isPrivete, UserId, UserExist, newProject;

  return regeneratorRuntime.async(function addNewProject$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          res.set('Access-Control-Allow-Origin', '*');
          _req$body = req.body, PName = _req$body.PName, Desc = _req$body.Desc, Tags = _req$body.Tags, PType = _req$body.PType, isPrivete = _req$body.isPrivete, UserId = _req$body.UserId;
          _context4.prev = 2;
          _context4.next = 5;
          return regeneratorRuntime.awrap(User.findById(UserId));

        case 5:
          UserExist = _context4.sent;

          if (UserExist) {
            _context4.next = 8;
            break;
          }

          return _context4.abrupt("return", res.status(400).json({
            message: "User Does not exist!"
          }));

        case 8:
          newProject = new Project({
            PName: PName,
            Desc: Desc,
            Tags: Tags,
            PType: PType,
            isPrivete: isPrivete,
            UserId: UserId
          });
          _context4.next = 11;
          return regeneratorRuntime.awrap(newProject.save());

        case 11:
          _context4.next = 16;
          break;

        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](2);
          return _context4.abrupt("return", res.status(400).json({
            success: false,
            response: {
              error: _context4.t0
            }
          }));

        case 16:
          return _context4.abrupt("return", res.status(200).json({
            success: true,
            response: {
              code: "Project_added_success"
            }
          }));

        case 17:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[2, 13]]);
};

var UpdateProjectLink = function UpdateProjectLink(req, res, next) {
  var ProjectId, UpdatedProjectLink, update;
  return regeneratorRuntime.async(function UpdateProjectLink$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          res.set('Access-Control-Allow-Origin', '*');
          ProjectId = req.body.ProjectId;
          UpdatedProjectLink = req.body.UpdatedProjectLink;
          console.log(UpdateProjectLink);
          _context5.prev = 4;
          update = {
            ProjectLink: UpdatedProjectLink
          };
          _context5.next = 8;
          return regeneratorRuntime.awrap(Project.findByIdAndUpdate(ProjectId, update));

        case 8:
          _context5.next = 13;
          break;

        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](4);
          return _context5.abrupt("return", res.status(400).json({
            success: false,
            response: {
              error: _context5.t0
            }
          }));

        case 13:
          return _context5.abrupt("return", res.status(200).json({
            success: true,
            response: {
              code: "Project_link_updated"
            }
          }));

        case 14:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[4, 10]]);
}; //make api for project download


var DownloadProject = function DownloadProject(req, res, next) {
  var ProjectId, DownloadProjectLink, update;
  return regeneratorRuntime.async(function DownloadProject$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          res.set('Access-Control-Allow-Origin', '*');
          ProjectId = req.body.ProjectId;
          DownloadProjectLink = req.body.DownloadProjectLink;
          console.log(DownloadProjectLink);
          _context6.prev = 4;
          update = {
            DownloadProjectLink: DownloadProjectLink
          };
          _context6.next = 8;
          return regeneratorRuntime.awrap(Project.findByIdAndUpdate(ProjectId, update));

        case 8:
          _context6.next = 13;
          break;

        case 10:
          _context6.prev = 10;
          _context6.t0 = _context6["catch"](4);
          return _context6.abrupt("return", res.status(400).json({
            success: false,
            response: {
              error: _context6.t0
            }
          }));

        case 13:
          return _context6.abrupt("return", res.status(200).json({
            success: true,
            response: {
              code: "Project_downloaded"
            }
          }));

        case 14:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[4, 10]]);
};

module.exports = {
  getAllProjects: getAllProjects,
  getProjectById: getProjectById,
  getProjectByUserId: getProjectByUserId,
  addNewProject: addNewProject,
  UpdateProjectLink: UpdateProjectLink,
  DownloadProject: DownloadProject
};