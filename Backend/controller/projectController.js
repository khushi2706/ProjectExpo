const Project = require("../model/Project");
const User = require("../model/User");
const axios = require('axios')
const createReport = require("./Plag/createPlag");
var nodemailer = require('nodemailer');

var S3Zipper = require ('aws-s3-zipper');

const getAllProjects = async (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');

    let projects;

    try {
        projects = await Project.find();
       // console.log(projects);
    } catch (error) {
        console.log(error);
    }

    if (!projects) {
        return res.status(404).json({
            success: false,
            response: {
                code: Project_Found_fail,
                message: "Project not found",
            },
        });
    }
    return res.status(200).json({ projects })
}

const getProjectById = async (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');

    const ProId = req.params.id;
    res.set('Access-Control-Allow-Origin', '*');
    let project;
    try {
        project = await Project.findById(ProId);
    }
    catch (e) {
        return console.log(e);
    }

    if (!project)
        return res.status(500).json({ message: "not Found" })

    return res.status(200).json({ project });
}
const getProjectByUserId = async(req,res,next) => {
    const UserId = req.params;
    res.set('Access-Control-Allow-Origin', '*');
    let project;
    try{
        project = await Project.find(UserId);
    }
    catch(e)
    {
        return console.log(e);
    }

    if(!project)
    return res.status(500).json({ message: "not Found" })

    return res.status(200).json({project});
}
const addNewProject = async (req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  
  let newProject;
  let PId;
    const {  
        PName,
        Desc,
        Tags,
        PType,
        isPrivete,
        UserId,
        SubjectId,
        ProjectLink
        
       } = req.body;
        console.log(ProjectLink);
     try {
      //Check if college is exist
      let UserExist = await User.findById(UserId);
  
      console.log(UserExist);
      if (!UserExist) {
        return res.status(400).json({
          message: "User Does not exist!",
        });
      }
  
      if(SubjectId != null)
    {  newProject = new Project({
        PName,
        Desc,
        Tags,
        PType,
        isPrivete,
        UserId,
        SubjectId,
      });}
      else
      {
        newProject = new Project({
          PName,
          Desc,
          Tags,
          PType,
          isPrivete,
          UserId
        });
      }
      await newProject.save();
     console.log("project save");
    const res = await axios.post(`http://localhost:5000/api/projectupload`,
    {
      projectId: newProject._id,
      folderPath: ProjectLink
    })
    .catch((err)=> console.log(err));
    } catch (error) {
      return res.status(400).json({
        success: false,
        response: {
          error,
        },
      });
    }
    PId = newProject._id;
    // try {
    //   const existUser = await  User.findById(UserId);
    //   const mails = existUser.FollowersMail;

    //   mails.forEach(mail=>{
    //     DoMail(mail);
    //   })
    // } catch (error) {
    //  return res.status(400).json({
    //   error
    //  }) 
    // }

    console.log(PId);
  
    return res.status(200).json({
     
        ProjectId : PId
      
    });
};

const getPlagarism = async(req,res,next) =>{
  console.log("checking..");
  res.set('Access-Control-Allow-Origin', '*');
  const {projectId} = req.body;
  console.log(projectId);
  const project =  await Project.findById(projectId);
  const links = project.ProjectLink

  let totalPlga = 0;

  let count = 1;
  console.log("looping......");
  links.forEach(async(link)=>{
    console.log(link);
    console.log( await createReport(link));
    totalPlga += await createReport(link);
    count = count+1;
  })

  let avg = totalPlga/count;
  console.log(totalPlga);

  console.log("---------------");
  console.log(projectId,avg);
  
 

  return res.status(200).json({
    msg : "done",
    avg
  })

}

const UpdateProjectLink = async (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    const {
      ProjectId,
    } = req.body;

    const UpdatedProjectLink = req.body.UpdatedProjectLink;
    console.log(UpdateProjectLink);
    try {
      const update = {  ProjectLink : UpdatedProjectLink };

     await Project.findByIdAndUpdate(ProjectId,
          update);
     
  } catch (error) {
      return res.status(400).json({
          success : false,
          response : {
              error
          }
      })
  }
    
    return res.status(200).json({
        success: true,
        response: {
            code: "Project_link_updated",
        },
    });
};

//make api for project download
const DownloadProjectLink = async (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    const {
      ProjectId,
    } = req.body;

    const DownloadProjectLink = req.body.DownloadProjectLink;
    console.log(DownloadProjectLink);
    try {
      const update = {  DownloadProjectLink : DownloadProjectLink };

      await Project.findByIdAndUpdate(ProjectId,

          update);

    } catch (error) {

        return res.status(400).json({
            success : false,
            response : {
                error
            }
        })
    }

    return res.status(200).json({
        success: true,
        response: {
            code: "Project_downloaded",
        },
    });
}

  
const getProjectBySubjectID = async(req,res,next) => {
  const SubjectId = req.params;
  res.set('Access-Control-Allow-Origin', '*');
  console.log(SubjectId);

  let project;
  try{
      project = await Project.find(SubjectId);
  }
  catch(e)
  {
      return console.log(e);
  }

  if(!project)
  return res.status(500).json({ message: "not Found" })

  return res.status(200).json({project});
}

const searchTheProject = async(req,res,next)=>{
  console.log("-----");
  console.log(req.params.key);
  
  res.set('Access-Control-Allow-Origin', '*');
  let projects = await Project.find({ PName : new RegExp(req.params.key, 'i') })
 return res.status(200).json({ projects });

}

const getProjectPlga = async(req,res,next)=>{
  const ProjectId = req.params.ProjectId;
  res.set('Access-Control-Allow-Origin', '*');
  
  let project;
  try {
    project  = await Project.find({ _id : ProjectId.toString() }, 
  { Rating :1 , PlagId : 1 , PlagLink : 1}  );
  } catch (error) {
    return res.status(400).json({error});
  }

  return res.status(200).json({project});
}

const setPlaga = async(req,res,next)=>{
  res.set('Access-Control-Allow-Origin', '*');
 
  const { 
    ProjectId,
    PlagRate
   } = req.body;
   console.log("geting" + ProjectId,
   PlagRate);
   let projects;
   console.log(ProjectId,
    PlagRate);

   const update = { PlagRate:PlagRate }
   try {
    await Project.findByIdAndUpdate(ProjectId,update);
   } catch (error) {
    console.log(error);
   return res.status(400).json({error});
   }


   return res.status(200).json({
    success:true,
     })
}

const DoMail = (email) =>{

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ripperjohn535@gmail.com',
      pass: 'Johnripper535'
    }
  });
  
  var mailOptions = {
    from: 'ripperjohn535@gmail.com',
    to: email,
    subject: 'New Project',
    text: 'Your following is just Upload new Project! '
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

}

const addRates = async (req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  const {
    projectId,
    RateTobeAdded
  } = req.body;

  const ExistProject = await Project.findById(projectId);
  const CurrRating = ExistProject.Rating;

  ExistProject.Rating = CurrRating + RateTobeAdded;

  await ExistProject.save();

  const userId = ExistProject.UserId;
  const ExistingUser = await User.findById(userId);
  const currRate = ExistingUser.Rating;
  ExistingUser.Rating = currRate + RateTobeAdded;
  await ExistingUser.save();

  return res.status(200).json({
    msg: "done"
  })
}

const downloadProject = async(req,res,next) =>{
  res.set('Access-Control-Allow-Origin', '*');
    const 
      ProjectId
     = req.params.ProjectId;

    console.log(ProjectId);
var config ={
    accessKeyId: "AKIAS6G5ANL5655DKEHC",
    secretAccessKey: "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",
    region: "ap-south-1",
    bucket: "projectexpo-projects"
};
var zipper = new S3Zipper(config);

zipper.zipToFile ({
    s3FolderName: ProjectId
    , startKey: '' // could keep null
    , zipFileName: 'C:\\Users\\Khushi\\Downloads\\downloadedPro.zip'
    , recursive: true
}
,function(err,result){
    if(err)
        console.error(err);
    else{
        var lastFile = result.zippedFiles[result.zippedFiles.length-1];
        if(lastFile)
            console.log('last key ', lastFile.Key); // next time start from here
    }
});

return res.status(200).json({msg : "done"});
}

module.exports = { getAllProjects , getProjectById , 
  getProjectByUserId , addNewProject ,
   getProjectBySubjectID , getProjectPlga ,
   searchTheProject , setPlaga , UpdateProjectLink, DownloadProjectLink , getPlagarism ,  addRates , downloadProject }

