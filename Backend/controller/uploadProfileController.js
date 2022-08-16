const express = require('express')
const uploadRoute = express()
const { upload,uploadProject } = require('./S3UploadClient')
const axios = require('axios')

uploadRoute.post('/', upload.array('inputFile',100), (req, res) => {
  if (!req.files) res.status(400).json({ error: 'No files were uploaded.' })  
  console.log("uploading");
  console.log();
  const clgLink = req.files[0].location
 
  const clgid = req.body.CollegeId

  axios.put("http://localhost:5000/api/college/changeProfile",{
    collegeId : clgid,
    CollegeNewImg: clgLink
  })
  // console.log(res);
  // const loc = req.files.location
  // console.log(loc);
    res.status(201).redirect("http://localhost:3000/collegeprofile")
  })

  // uploadRoute.post('/', uploadProject.array('inputFile',100), (req, res) => {
  //   if (!req.files) res.status(400).json({ error: 'No files were uploaded.' })  
  //   console.log("uploading");
      
  //     res.status(201).json({
  //       message: 'Successfully uploaded ' + req.files.length + ' files!',
  //       files: req.files
  //     })
  //   })

module.exports = uploadRoute
