const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const University = require("../model/University");
const User = require("../model/User");

const getAllUniversities = async (req, res, next) => {
    let universities;
    try {
        universities = await University.find();
    } catch (e) {
        return res.status(400).json({
            success : false,
            response : {
                message : e
            }
        })
    }

    if (!universities) {
        return res.status(404).json({
            success: false,
            response: {
                message: "universities not found",
            },
        });
    }

    return res.status(200).json({ success: true , universities });
}


const addNewUniversity = async (req, res, next) => {
   
    const {
        Email,
        Pass,
        UName,
        UType,
        Address,
        District,
        State,
         } = req.body;

    const UserType = "University-admin";
    console.log(Email);
    let user;
    try {

        //Check if user is exist 
        let existUser = await User.findOne({Email : Email}).exec();
        //if already exist then not create
        if(existUser)
       {
         return res.status(400).json({
            message : "User Already exists"
        })
    }
        //encrypt password
        Password = bcrypt.hashSync(Pass);
        const newUser = new User({
            Email,
            Password,
            UserType
        });
        
        //start session becase we have to create user and University in same session 
        // if one is fail then another option will not perfom
        const session = await mongoose.startSession();
        session.startTransaction();
        user  = await newUser.save();
        const UserId = user._id;
        console.log("making uni");
        const university = new University({
            UName,
            UType,
            Address,
            District,
            State,
            UserId,
        });    
        await university.save();
      
        session.commitTransaction();
       
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
            code: "University_added_success",
            message: "",
            data: {},
        },
    });

  
}


const getUniversityById = async (req, res, next) => {
    const { id } = req.params;
    let university;
    try {
        university = await University.findById(id);
    } catch (e) {
        return res.status(400).json({
            success : false,
            response : {
                message : e
            }
        })
    }

    if (!university) {
        return res.status(404).json({
            success: false,
            response: {
                message: "university not found",
            },
        });
    }

    return res.status(200).json({ university });
}


const getUniversityByUserId = async (req, res, next) => {
    const { UserId } = req.params;
    let university;
    try {
        university = await University.findOne({UserId });
    } catch (e) {
        return res.status(400).json({
            success : false,
            response : {
                message : e
            }
        })
    }

    if (!university) {
        return res.status(404).json({
            success: false,
            response: {
                message: "university not found",
            },
        });
    }

    return res.status(200).json({ success : true , university });
}


module.exports = { getAllUniversities, addNewUniversity, getUniversityById ,getUniversityByUserId };