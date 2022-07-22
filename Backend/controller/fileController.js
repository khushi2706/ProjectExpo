const e = require('express');
const mongoose = require('mongoose');
const college = require('../model/College');
const user = require('../model/User');


const getFile = async (req, res, next) => {
    const fileId = req.params.fileId;
    const file = await file.findById(fileId);
    res.status(200).json(file);
}


const getFiles = async (req, res, next) => {
    const files = await file.find();
    res.status(200).json(files);
}


const getFilesByUser = async (req, res, next) => {
    const userId = req.params.userId;
    const files = await file.find({ fileUser: userId });
    res.status(200).json(files);
}


const getFilesByCollege = async (req, res, next) => {
    const collegeId = req.params.collegeId;
    const files = await file.find({ fileCollege: collegeId });
    res.status(200).json(files);
}


const getFilesByCategory = async (req, res, next) => {
    const category = req.params.category;
    const files = await file.find({ fileCategory: category });
    res.status(200).json(files);
}


const getFilesByLanguage = async (req, res, next) => {
    const language = req.params.language;
    const files = await file.find({ fileLanguage: language });
    res.status(200).json(files);
}


const getFilesByTag = async (req, res, next) => {
    const tag = req.params.tag;
    const files = await file.find({ fileTags: tag });
    res.status(200).json(files);
}


const getFilesByRating = async (req, res, next) => {
    const rating = req.params.rating;
    const files = await file.find({ fileRating: rating });
    res.status(200).json(files);
}


const getFilesByRatingCount = async (req, res, next) => {
    const ratingCount = req.params.ratingCount;
    const files = await file.find({ fileRatingCount: ratingCount });
    res.status(200).json(files);
}


const getFilesByRatingAverage = async (req, res, next) => {
    const ratingAverage = req.params.ratingAverage;
    const files = await file.find({ fileRatingAverage: ratingAverage });
    res.status(200).json(files);
}


const getFilesByDownloads = async (req, res, next) => {
    const downloads = req.params.downloads;
    const files = await file.find({ fileDownloads: downloads });
    res.status(200).json(files);
}


const getFilesByViews = async (req, res, next) => {
    const views = req.params.views;
    const files = await file.find({ fileViews: views });
    res.status(200).json(files);
}


const getFilesByLikes = async (req, res, next) => {
    const likes = req.params.likes;
    const files = await file.find({ fileLikes: likes });
    res.status(200).json(files);
}


const getFilesByDislikes = async (req, res, next) => {
    const dislikes = req.params.dislikes;
    const files = await file.find({ fileDislikes: dislikes });
    res.status(200).json(files);
}


const getFilesByComments = async (req, res, next) => {
    const comments = req.params.comments;
    const files = await file.find({ fileComments: comments });
    res.status(200).json(files);
}


const getFilesByCommentId = async (req, res, next) => {
    const commentId = req.params.commentId;
    const files = await file.find({ fileComments: { $elemMatch: { commentId: commentId } } });
    res.status(200).json(files);
}


const getFilesByCommentUser = async (req, res, next) => {
    const commentUser = req.params.commentUser;
    const files = await file.find({ fileComments: { $elemMatch: { commentUser: commentUser } } });
    res.status(200).json(files);
}


const getFilesByCommentDate = async (req, res, next) => {
    const commentDate = req.params.commentDate;
    const files = await file.find({ fileComments: { $elemMatch: { commentDate: commentDate } } });
    res.status(200).json(files);
}
