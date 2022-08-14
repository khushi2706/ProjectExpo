const e = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const College = require("../model/College");
const User = require("../model/User");
var ObjectId = require('mongodb').ObjectID;

const getAllColleges = async (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    let colleges;
    try {
        colleges = await College.find();
    } catch (e) {
        return res.status(400).json({
            success : false,
            response : {
                message : e
            }
        })
    }

    if (!colleges) {
        return res.status(404).json({
            success: false,
            response: {
                message: "Colleges not found",
            },
        });
    }

    return res.status(200).json({ success: true , colleges });
}


const addNewCollege = async (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    const {
        Email,
        Pass,
        CName,
        CollegeInfo,
        CollegeEmail,
        Ctype,
        Address,
        District,
        State,
        CollegeImg,
        CollegeWebsite,
    UniName
         } = req.body;

    const UserType = "College-admin";
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
        
        //start session becase we have to create user and college in same session 
        // if one is fail then another option will not perfom
        const session = await mongoose.startSession();
        session.startTransaction();
        user  = await newUser.save();
        const UserId = user._id;
        const college = new College({
            CName,
            CollegeInfo,
            CollegeEmail,
            Ctype,
            Address,
            District,
            State,
            UserId,
            CollegeImg,
            CollegeWebsite,
            UniName
        });    
        await college.save();
      
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
            code: "college_added_success",
            message: "",
            data: {},
        },
    });

  
}


const getCollegeById = async (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    const { id } = req.params;
    let college;
    try {
        college = await College.findById(id);
    } catch (e) {
        return res.status(400).json({
            success : false,
            response : {
                message : e
            }
        })
    }

    if (!college) {
        return res.status(404).json({
            success: false,
            response: {
                message: "college not found",
            },
        });
    }

    return res.status(200).json({ college });
}

const getCollegeByUserId = async (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    const { UserId } = req.params;
    let college;
    try {
        college = await College.findOne({UserId });
    } catch (e) {
        return res.status(400).json({
            success : false,
            response : {
                message : e
            }
        })
    }

    if (!college) {
        return res.status(404).json({
            success: false,
            response: {
                message: "college not found",
            },
        });
    }

    return res.status(200).json({ success : true , college });
}

const updateCollege = async (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    const { id } = req.params;
    const { 
        CName,
        CollegeInfo,
        CollegeEmail,
        Ctype,
        Address,
        District,
        State,
        UniId,
        UserId,
        CollegeImg } = req.body;

    let existingCollege;

    try {
        existingCollege = await User.findById(user);
        console.log(existingUser);
    } catch (e) {
        return res.status(400).json({
            success : false,
            response : {
                message : e
            }
        })
    }
    if (!existingUser) {
        return res.status(400).json({ message: " Unautorized" });
    }

    let college;
    try {
        college = await college.findByIdAndUpdate(id, {
            CName,
            CollegeInfo,
            CollegeEmail,
            Ctype,
            Address,
            District,
            State,
            UniId,
            UserId,
            CollegeImg
        });
    } catch (e) { 
         return res.status(400).json({
        success : false,
        response : {
            message : e
        }
    })
    }

    if (!college) {
        return res.status(404).json({
            success: false,
            response: {
                code: college_added_fail,
                message: "college not found",
            },
        });
    }

    return res.status(200).json({ college });
}

const changeCollgeProfile = async(req,res,next) =>{
    res.set('Access-Control-Allow-Origin', '*');
    const {
         collegeId,
         CollegeNewImg
         } = req.body;

         console.log(collegeId , CollegeNewImg);
    
    try {

        const filter = { _id: collegeId };
        const update = { CollegeImg : CollegeNewImg };

       await College.findByIdAndUpdate(collegeId,
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
            code: "college_Update_success",
            message: "",
            data: {},
        },
    });
}

const deleteCollege = async (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    const { id } = req.params;
    const clg = College.findById(id).UserId;

    if(clg)
    {
    const userId = clg.userId;
    try {
        await College.findByIdAndRemove(id);
        await User.findByIdAndRemove(userId);
        
    return res.status(200).json({ message : "College is removed" });
    } 
    catch (e) {
        return res.status(400).json({
            success : false,
            response : {
                message : e
            }
        })
    }
    }
}


module.exports = { getAllColleges, addNewCollege, getCollegeById, updateCollege, deleteCollege ,getCollegeByUserId , changeCollgeProfile };