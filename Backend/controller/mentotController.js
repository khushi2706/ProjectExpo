const e = require("express");
const mongoose = require("mongoose");

const Mentor = require("../model/Mentor");
const User = require("../model/User");

const getAllMentor = async(req,res,next) =>{
    res.set('Access-Control-Allow-Origin', '*');
    let Mentors;

    try {
        Mentors = await Mentor.find();
    } catch (error) {
        console.log(e);
    }

    if(!Mentors)
    {
        return res.status(404).json({
            success:false,
            response: {
                code : mentor_found_fail,
                message: "Mentor not found",
            },
        });
    }

    return res.status(200).json({ Mentors });
}

const getMentorById = async (req,res,next) => {

res.set('Access-Control-Allow-Origin', '*');

    const mentorId = req.params.id;

    let mentor;
    try {
        mentor = await Mentor.findById(mentorId);
    } catch (e) {
        console.log(e);
    }

    if(!mentor)
    return res.status(500).json({ message : "Not found" });

    return res.status(200).json({mentor});
}

const addNewMentor = async (req,res,next) => {
    console.log(req.body);
    res.set('Access-Control-Allow-Origin', '*');

    const { Name , Speciality , TypeOfUser , UserId , Contact }
    = req.body;
    
    const newMentor = new Mentor({
        Name , Speciality , TypeOfUser , UserId , Contact
    });

    try {
        await newMentor.save();
        return res.status(200).json({
            success: true,
            response: {
                code: "Mentor_added_success",
                message: "",
                data: {},
            },
        });
    } catch (e) {
      return res.status(400).json({
        error: e
      })
    }
    
}

module.exports = { getAllMentor , addNewMentor, getMentorById }