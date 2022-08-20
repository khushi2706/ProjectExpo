"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Your config file
// const s3Config = require('./s3Config');
var AWS = require("aws-sdk");

var fs = require("fs");

var path = require("path");

var mime = require("mime");

var config = {
  s3BucketName: "projectexpo-projects",
  // Absolute path
  localFolder: "C:\\Users\\Lenovo\\Desktop\\SIH'2022\\plag finalplag final",
  accessKeyId: "AKIAS6G5ANL5655DKEHC",
  secretAccessKey: "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",
  folder_name: "plagarism"
}; // {
//     "accessKeyId": "AKIAS6G5ANL5655DKEHC",
//     "secretAccessKey": "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",
//     "region": "ap-south-1",
//     "bucket": "projectexpo-projects"
// }

exports.folderUpload = function _callee(_ref) {
  var accessKeyId, secretAccessKeyId, s3BucketName, localFolder, folder_name, s3, filesPaths, allPaths, i, statistics, filePath, fileContent, relativeToBaseFilePath, relativeToBaseFilePathForS3;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          accessKeyId = _ref.accessKeyId, secretAccessKeyId = _ref.secretAccessKeyId, s3BucketName = _ref.s3BucketName, localFolder = _ref.localFolder, folder_name = _ref.folder_name;
          AWS.config.setPromisesDependency(Promise);
          s3 = new AWS.S3({
            signatureVersion: 'v4',
            accessKeyId: "AKIAS6G5ANL5655DKEHC",
            secretAccessKey: "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"
          });
          _context.next = 5;
          return regeneratorRuntime.awrap(walkSync(localFolder));

        case 5:
          filesPaths = _context.sent;
          allPaths = [];
          i = 0;

        case 8:
          if (!(i < filesPaths.length)) {
            _context.next = 26;
            break;
          }

          statistics = "(".concat(i + 1, "/").concat(filesPaths.length, ", ").concat(Math.round((i + 1) / filesPaths.length * 100), "%)");
          filePath = filesPaths[i];
          console.log("filepath: " + filePath); //

          fileContent = fs.readFileSync(filePath); //read file
          // If the slash is like this "/" s3 will create a new folder, otherwise will not work properly.

          relativeToBaseFilePath = folder_name + '/' + path.normalize(path.relative(localFolder, filePath));
          console.log("rebs: " + relativeToBaseFilePath);
          relativeToBaseFilePathForS3 = relativeToBaseFilePath.split(path.sep).join('/');
          console.log("https://projectexpo-projects.s3.ap-south-1.amazonaws.com/" + relativeToBaseFilePathForS3); // const mimeType = mime.getType(filePath);

          console.log("Uploading", statistics, relativeToBaseFilePathForS3);
          console.log("Path : " + relativeToBaseFilePathForS3);
          _context.next = 21;
          return regeneratorRuntime.awrap(s3.putObject({
            ACL: "public-read",
            Bucket: s3BucketName,
            Key: relativeToBaseFilePathForS3,
            Body: fileContent //ContentType: mimeType,

          }).promise());

        case 21:
          console.log("Uploaded ", statistics, relativeToBaseFilePathForS3);
          allPaths.push(relativeToBaseFilePathForS3);

        case 23:
          i++;
          _context.next = 8;
          break;

        case 26:
          console.log("allpaths: ", allPaths);
          return _context.abrupt("return", allPaths);

        case 28:
        case "end":
          return _context.stop();
      }
    }
  });
}; // folderUpload(config).then(() => {
//   console.log(`Completed!`);
// });


function walkSync(dir) {
  var files, output, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, file, pathToFile, isDirectory;

  return regeneratorRuntime.async(function walkSync$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          files = fs.readdirSync(dir);
          output = [];
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context2.prev = 5;
          _iterator = files[Symbol.iterator]();

        case 7:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context2.next = 30;
            break;
          }

          file = _step.value;
          pathToFile = path.join(dir, file);
          isDirectory = fs.statSync(pathToFile).isDirectory();

          if (!isDirectory) {
            _context2.next = 22;
            break;
          }

          _context2.t0 = output.push;
          _context2.t1 = output;
          _context2.t2 = _toConsumableArray;
          _context2.next = 17;
          return regeneratorRuntime.awrap(walkSync(pathToFile));

        case 17:
          _context2.t3 = _context2.sent;
          _context2.t4 = (0, _context2.t2)(_context2.t3);

          _context2.t0.apply.call(_context2.t0, _context2.t1, _context2.t4);

          _context2.next = 27;
          break;

        case 22:
          _context2.t5 = output;
          _context2.next = 25;
          return regeneratorRuntime.awrap(pathToFile);

        case 25:
          _context2.t6 = _context2.sent;

          _context2.t5.push.call(_context2.t5, _context2.t6);

        case 27:
          _iteratorNormalCompletion = true;
          _context2.next = 7;
          break;

        case 30:
          _context2.next = 36;
          break;

        case 32:
          _context2.prev = 32;
          _context2.t7 = _context2["catch"](5);
          _didIteratorError = true;
          _iteratorError = _context2.t7;

        case 36:
          _context2.prev = 36;
          _context2.prev = 37;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 39:
          _context2.prev = 39;

          if (!_didIteratorError) {
            _context2.next = 42;
            break;
          }

          throw _iteratorError;

        case 42:
          return _context2.finish(39);

        case 43:
          return _context2.finish(36);

        case 44:
          console.log(output);
          return _context2.abrupt("return", output);

        case 46:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[5, 32, 36, 44], [37,, 39, 43]]);
} // module.exports = { folderUpload };