//create a schema to store the zip file which is uploaded by the user and store it in the database and return the file id to the user


var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var fileSchema = new Schema({
    fileId: String,
    fileName: String,
    filePath: String,
    fileType: String,
    fileSize: String,
    fileDate: String,
    fileUser: String,
    fileDescription: String,
    fileTags: String,
    fileCategory: String,
    fileLanguage: String,
    fileDownloads: String,
    fileViews: String,
    fileLikes: String,
    fileDislikes: String,
    fileComments: String,
    fileRating: String,
    fileRatingCount: String,
    fileRatingAverage: String,

    fileComments: [{
        commentId: String,
        commentUser: String,
        commentDate: String,
        commentText: String,
        commentLikes: String,
        commentDislikes: String,
        commentReplies: [{
            replyId: String,
            replyUser: String,
            replyDate: String,
            replyText: String,
            replyLikes: String,
            replyDislikes: String
        }]

    }]


});


module.exports = mongoose.model('file', fileSchema);
//module.exports = fileSchema;