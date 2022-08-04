const e = require("express");
const mongoose = require("mongoose");

const college = require("../model/College");
const user = require("../model/User");


const getAllColleges = async (req, res, next) => {
    let colleges;
    try {
        colleges = await college.find();
    } catch (e) {
        console.log(e);
    }

    if (!colleges) {
        return res.status(404).json({
            success: false,
            response: {
                code: college_found_fail,
                message: "college not found",
            },
        });
    }

    return res.status(200).json({ colleges });
}


const addNewCollege = async (req, res, next) => {
    console.log(req.body);
    const { name, 
        information,
        address,
        city,
        state,
        url,
        type, } = req.body;

    let existingUser;

    try {
        console.log(name, address ,user);
        existingUser = await User.findById(user);
        console.log(existingUser);
    } catch (e) {
        return console.log(e);
    }
    if (!existingUser) {
        return res.status(400).json({ message: " Unautorized" });
    }

    const college = new College({
        name, 
        information,
        address,
        city,
        state,
        url,
        type,
    });

    try {
        await college.save();

        return res.status(200).json({
            success: true,
            response: {
                code: "college_added_success",
                message: "",
                data: {},
            },
        });
    } catch (e) {
        return res.status(400).json({ message: " Error" });
    }
}


const getCollegeById = async (req, res, next) => {
    const { id } = req.params;
    let college;
    try {
        college = await college.findById(id);
    } catch (e) {
        console.log(e);
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


const updateCollege = async (req, res, next) => {
    const { id } = req.params;
    const { name, 
        information,
        address,
        city,
        state,
        url,
        type, } = req.body;

    let existingUser;

    try {
        existingUser = await User.findById(user);
        console.log(existingUser);
    } catch (e) {
        return console.log(e);
    }
    if (!existingUser) {
        return res.status(400).json({ message: " Unautorized" });
    }

    let college;
    try {
        college = await college.findByIdAndUpdate(id, {
            name, 
            information,
            address,
            city,
            state,
            url,
            type,
        });
    } catch (e) {
        return console.log(e);
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


const deleteCollege = async (req, res, next) => {
    const { id } = req.params;
    let college;
    try {
        college = await college.findByIdAndDelete(id);
    } catch (e) {
        console.log(e);
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


module.exports = { getAllColleges, addNewCollege, getCollegeById, updateCollege, deleteCollege };