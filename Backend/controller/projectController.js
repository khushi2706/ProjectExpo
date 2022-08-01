const Project = require("../model/Project")

const getAllProjects = async(req,res,next)=>{
    res.set('Access-Control-Allow-Origin', '*');
    
    let projects;

    try {
        projects = await Project.find();
    } catch (error) {
        console.log(error);
    }

    if(!projects)
    {
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

const getProjectById = async(req,res,next) => {
    const ProId = req.params.id;

    let project;
    try{
        project = await Project.findById(ProId);
    }
    catch(e)
    {
        return console.log(e);
    }

    if(!project)
    return res.status(500).json({ message: "not Found" })

    return res.status(200).json({project});
}

module.exports = { getAllProjects , getProjectById }