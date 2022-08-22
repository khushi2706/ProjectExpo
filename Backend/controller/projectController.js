const Project = require("../model/Project");
const User = require("../model/User");

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
    const {  
        PName,
        Desc,
        Link,
        Tags,
        PType,
        isPrivete,
        UserId,
        SubjectId,
        PlagId,
        PlagLink,
        Rating
       } = req.body;
  
    try {
      //Check if college is exist
      let UserExist = await User.findById(UserId);
  
      if (!UserExist) {
        return res.status(400).json({
          message: "User Does not exist!",
        });
      }
  
      const newProject = new Project({
        PName,
        Desc,
        Link,
        Tags,
        PType,
        isPrivete,
        UserId,
        SubjectId,
        PlagId,
        PlagLink,
        Rating
      });
  
      await newProject.save();
    } catch (error) {
      return res.status(400).json({
        success: false,
        response: {
          error,
        },
      });
    }
    return res.status(200).json({
      success: true,
      response: {
        code: "Project_added_success",
      },
    });
};

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
module.exports = { getAllProjects , getProjectById , getProjectByUserId , addNewProject , getProjectBySubjectID , getProjectPlga , searchTheProject}
