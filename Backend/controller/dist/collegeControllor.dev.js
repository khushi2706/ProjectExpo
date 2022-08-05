"use strict";

var e = require("express");

var mongoose = require("mongoose");

var college = require("../model/College");

var user = require("../model/User");

var getAllColleges = function getAllColleges(req, res, next) {
  var colleges;
  return regeneratorRuntime.async(function getAllColleges$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(college.find());

        case 3:
          colleges = _context.sent;
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 9:
          if (colleges) {
            _context.next = 11;
            break;
          }

          return _context.abrupt("return", res.status(404).json({
            success: false,
            response: {
              code: college_added_fail,
              message: "college not found"
            }
          }));

        case 11:
          return _context.abrupt("return", res.status(200).json({
            colleges: colleges
          }));

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

var addNewCollege = function addNewCollege(req, res, next) {
  var _req$body, name, information, address, city, state, url, type, existingUser, college;

  return regeneratorRuntime.async(function addNewCollege$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log(req.body);
          _req$body = req.body, name = _req$body.name, information = _req$body.information, address = _req$body.address, city = _req$body.city, state = _req$body.state, url = _req$body.url, type = _req$body.type;
          _context2.prev = 2;
          console.log(name, address, user);
          _context2.next = 6;
          return regeneratorRuntime.awrap(User.findById(user));

        case 6:
          existingUser = _context2.sent;
          console.log(existingUser);
          _context2.next = 13;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](2);
          return _context2.abrupt("return", console.log(_context2.t0));

        case 13:
          if (existingUser) {
            _context2.next = 15;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            message: " Unautorized"
          }));

        case 15:
          college = new College({
            name: name,
            information: information,
            address: address,
            city: city,
            state: state,
            url: url,
            type: type
          });
          _context2.prev = 16;
          _context2.next = 19;
          return regeneratorRuntime.awrap(college.save());

        case 19:
          return _context2.abrupt("return", res.status(200).json({
            success: true,
            response: {
              code: "college_added_success",
              message: "",
              data: {}
            }
          }));

        case 22:
          _context2.prev = 22;
          _context2.t1 = _context2["catch"](16);
          return _context2.abrupt("return", res.status(400).json({
            message: " Error"
          }));

        case 25:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[2, 10], [16, 22]]);
};

var getCollegeById = function getCollegeById(req, res, next) {
  var id, college;
  return regeneratorRuntime.async(function getCollegeById$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(college.findById(id));

        case 4:
          college = _context3.sent;
          _context3.next = 10;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](1);
          console.log(_context3.t0);

        case 10:
          if (college) {
            _context3.next = 12;
            break;
          }

          return _context3.abrupt("return", res.status(404).json({
            success: false,
            response: {
              code: college_added_fail,
              message: "college not found"
            }
          }));

        case 12:
          return _context3.abrupt("return", res.status(200).json({
            college: college
          }));

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 7]]);
};

var updateCollege = function updateCollege(req, res, next) {
  var id, _req$body2, name, information, address, city, state, url, type, existingUser, college;

  return regeneratorRuntime.async(function updateCollege$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, name = _req$body2.name, information = _req$body2.information, address = _req$body2.address, city = _req$body2.city, state = _req$body2.state, url = _req$body2.url, type = _req$body2.type;
          _context4.prev = 2;
          _context4.next = 5;
          return regeneratorRuntime.awrap(User.findById(user));

        case 5:
          existingUser = _context4.sent;
          console.log(existingUser);
          _context4.next = 12;
          break;

        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](2);
          return _context4.abrupt("return", console.log(_context4.t0));

        case 12:
          if (existingUser) {
            _context4.next = 14;
            break;
          }

          return _context4.abrupt("return", res.status(400).json({
            message: " Unautorized"
          }));

        case 14:
          _context4.prev = 14;
          _context4.next = 17;
          return regeneratorRuntime.awrap(college.findByIdAndUpdate(id, {
            name: name,
            information: information,
            address: address,
            city: city,
            state: state,
            url: url,
            type: type
          }));

        case 17:
          college = _context4.sent;
          _context4.next = 23;
          break;

        case 20:
          _context4.prev = 20;
          _context4.t1 = _context4["catch"](14);
          return _context4.abrupt("return", console.log(_context4.t1));

        case 23:
          if (college) {
            _context4.next = 25;
            break;
          }

          return _context4.abrupt("return", res.status(404).json({
            success: false,
            response: {
              code: college_added_fail,
              message: "college not found"
            }
          }));

        case 25:
          return _context4.abrupt("return", res.status(200).json({
            college: college
          }));

        case 26:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[2, 9], [14, 20]]);
};

var deleteCollege = function deleteCollege(req, res, next) {
  var id, college;
  return regeneratorRuntime.async(function deleteCollege$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.prev = 1;
          _context5.next = 4;
          return regeneratorRuntime.awrap(college.findByIdAndDelete(id));

        case 4:
          college = _context5.sent;
          _context5.next = 10;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](1);
          console.log(_context5.t0);

        case 10:
          if (college) {
            _context5.next = 12;
            break;
          }

          return _context5.abrupt("return", res.status(404).json({
            success: false,
            response: {
              code: college_added_fail,
              message: "college not found"
            }
          }));

        case 12:
          return _context5.abrupt("return", res.status(200).json({
            college: college
          }));

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 7]]);
};

module.exports = {
  getAllColleges: getAllColleges,
  addNewCollege: addNewCollege,
  getCollegeById: getCollegeById,
  updateCollege: updateCollege,
  deleteCollege: deleteCollege
};