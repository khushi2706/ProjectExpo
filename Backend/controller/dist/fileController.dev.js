"use strict";

var e = require('express');

var mongoose = require('mongoose');

var college = require('../model/College');

var user = require('../model/User');

var getFile = function getFile(req, res, next) {
  var fileId, file;
  return regeneratorRuntime.async(function getFile$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          fileId = req.params.fileId;
          _context.next = 3;
          return regeneratorRuntime.awrap(file.findById(fileId));

        case 3:
          file = _context.sent;
          res.status(200).json(file);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

var getFiles = function getFiles(req, res, next) {
  var files;
  return regeneratorRuntime.async(function getFiles$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(file.find());

        case 2:
          files = _context2.sent;
          res.status(200).json(files);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var getFilesByUser = function getFilesByUser(req, res, next) {
  var userId, files;
  return regeneratorRuntime.async(function getFilesByUser$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          userId = req.params.userId;
          _context3.next = 3;
          return regeneratorRuntime.awrap(file.find({
            fileUser: userId
          }));

        case 3:
          files = _context3.sent;
          res.status(200).json(files);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
};

var getFilesByCollege = function getFilesByCollege(req, res, next) {
  var collegeId, files;
  return regeneratorRuntime.async(function getFilesByCollege$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          collegeId = req.params.collegeId;
          _context4.next = 3;
          return regeneratorRuntime.awrap(file.find({
            fileCollege: collegeId
          }));

        case 3:
          files = _context4.sent;
          res.status(200).json(files);

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
};

var getFilesByCategory = function getFilesByCategory(req, res, next) {
  var category, files;
  return regeneratorRuntime.async(function getFilesByCategory$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          category = req.params.category;
          _context5.next = 3;
          return regeneratorRuntime.awrap(file.find({
            fileCategory: category
          }));

        case 3:
          files = _context5.sent;
          res.status(200).json(files);

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  });
};

var getFilesByLanguage = function getFilesByLanguage(req, res, next) {
  var language, files;
  return regeneratorRuntime.async(function getFilesByLanguage$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          language = req.params.language;
          _context6.next = 3;
          return regeneratorRuntime.awrap(file.find({
            fileLanguage: language
          }));

        case 3:
          files = _context6.sent;
          res.status(200).json(files);

        case 5:
        case "end":
          return _context6.stop();
      }
    }
  });
};

var getFilesByTag = function getFilesByTag(req, res, next) {
  var tag, files;
  return regeneratorRuntime.async(function getFilesByTag$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          tag = req.params.tag;
          _context7.next = 3;
          return regeneratorRuntime.awrap(file.find({
            fileTags: tag
          }));

        case 3:
          files = _context7.sent;
          res.status(200).json(files);

        case 5:
        case "end":
          return _context7.stop();
      }
    }
  });
};

var getFilesByRating = function getFilesByRating(req, res, next) {
  var rating, files;
  return regeneratorRuntime.async(function getFilesByRating$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          rating = req.params.rating;
          _context8.next = 3;
          return regeneratorRuntime.awrap(file.find({
            fileRating: rating
          }));

        case 3:
          files = _context8.sent;
          res.status(200).json(files);

        case 5:
        case "end":
          return _context8.stop();
      }
    }
  });
};

var getFilesByRatingCount = function getFilesByRatingCount(req, res, next) {
  var ratingCount, files;
  return regeneratorRuntime.async(function getFilesByRatingCount$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          ratingCount = req.params.ratingCount;
          _context9.next = 3;
          return regeneratorRuntime.awrap(file.find({
            fileRatingCount: ratingCount
          }));

        case 3:
          files = _context9.sent;
          res.status(200).json(files);

        case 5:
        case "end":
          return _context9.stop();
      }
    }
  });
};

var getFilesByRatingAverage = function getFilesByRatingAverage(req, res, next) {
  var ratingAverage, files;
  return regeneratorRuntime.async(function getFilesByRatingAverage$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          ratingAverage = req.params.ratingAverage;
          _context10.next = 3;
          return regeneratorRuntime.awrap(file.find({
            fileRatingAverage: ratingAverage
          }));

        case 3:
          files = _context10.sent;
          res.status(200).json(files);

        case 5:
        case "end":
          return _context10.stop();
      }
    }
  });
};

var getFilesByDownloads = function getFilesByDownloads(req, res, next) {
  var downloads, files;
  return regeneratorRuntime.async(function getFilesByDownloads$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          downloads = req.params.downloads;
          _context11.next = 3;
          return regeneratorRuntime.awrap(file.find({
            fileDownloads: downloads
          }));

        case 3:
          files = _context11.sent;
          res.status(200).json(files);

        case 5:
        case "end":
          return _context11.stop();
      }
    }
  });
};

var getFilesByViews = function getFilesByViews(req, res, next) {
  var views, files;
  return regeneratorRuntime.async(function getFilesByViews$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          views = req.params.views;
          _context12.next = 3;
          return regeneratorRuntime.awrap(file.find({
            fileViews: views
          }));

        case 3:
          files = _context12.sent;
          res.status(200).json(files);

        case 5:
        case "end":
          return _context12.stop();
      }
    }
  });
};

var getFilesByLikes = function getFilesByLikes(req, res, next) {
  var likes, files;
  return regeneratorRuntime.async(function getFilesByLikes$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          likes = req.params.likes;
          _context13.next = 3;
          return regeneratorRuntime.awrap(file.find({
            fileLikes: likes
          }));

        case 3:
          files = _context13.sent;
          res.status(200).json(files);

        case 5:
        case "end":
          return _context13.stop();
      }
    }
  });
};

var getFilesByDislikes = function getFilesByDislikes(req, res, next) {
  var dislikes, files;
  return regeneratorRuntime.async(function getFilesByDislikes$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          dislikes = req.params.dislikes;
          _context14.next = 3;
          return regeneratorRuntime.awrap(file.find({
            fileDislikes: dislikes
          }));

        case 3:
          files = _context14.sent;
          res.status(200).json(files);

        case 5:
        case "end":
          return _context14.stop();
      }
    }
  });
};

var getFilesByComments = function getFilesByComments(req, res, next) {
  var comments, files;
  return regeneratorRuntime.async(function getFilesByComments$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          comments = req.params.comments;
          _context15.next = 3;
          return regeneratorRuntime.awrap(file.find({
            fileComments: comments
          }));

        case 3:
          files = _context15.sent;
          res.status(200).json(files);

        case 5:
        case "end":
          return _context15.stop();
      }
    }
  });
};

var getFilesByCommentId = function getFilesByCommentId(req, res, next) {
  var commentId, files;
  return regeneratorRuntime.async(function getFilesByCommentId$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          commentId = req.params.commentId;
          _context16.next = 3;
          return regeneratorRuntime.awrap(file.find({
            fileComments: {
              $elemMatch: {
                commentId: commentId
              }
            }
          }));

        case 3:
          files = _context16.sent;
          res.status(200).json(files);

        case 5:
        case "end":
          return _context16.stop();
      }
    }
  });
};

var getFilesByCommentUser = function getFilesByCommentUser(req, res, next) {
  var commentUser, files;
  return regeneratorRuntime.async(function getFilesByCommentUser$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          commentUser = req.params.commentUser;
          _context17.next = 3;
          return regeneratorRuntime.awrap(file.find({
            fileComments: {
              $elemMatch: {
                commentUser: commentUser
              }
            }
          }));

        case 3:
          files = _context17.sent;
          res.status(200).json(files);

        case 5:
        case "end":
          return _context17.stop();
      }
    }
  });
};

var getFilesByCommentDate = function getFilesByCommentDate(req, res, next) {
  var commentDate, files;
  return regeneratorRuntime.async(function getFilesByCommentDate$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          commentDate = req.params.commentDate;
          _context18.next = 3;
          return regeneratorRuntime.awrap(file.find({
            fileComments: {
              $elemMatch: {
                commentDate: commentDate
              }
            }
          }));

        case 3:
          files = _context18.sent;
          res.status(200).json(files);

        case 5:
        case "end":
          return _context18.stop();
      }
    }
  });
};