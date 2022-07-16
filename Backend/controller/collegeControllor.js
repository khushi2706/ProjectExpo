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
                code: college_added_fail,
                message: "college not found",
            },
        });
    }

    return res.status(200).json({ colleges });
}


const addNewCollege = async (req, res, next) => {
    console.log(req.body);
    const { name, address, city, state, zip, user } = req.body;

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
        address,
        city,
        state,
        zip,
        user,
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
