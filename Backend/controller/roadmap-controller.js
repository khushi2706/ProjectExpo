const e = require("express");
const mongoose = require("mongoose");

const Roadmap = require("../model/Roadmap");
const User = require("../model/User");

const getAllRoadmaps = async (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    let roadmaps;
    try {
        roadmaps = await Roadmap.find();
    } catch (e) {
        console.log(e);
    }

    if (!roadmaps) {
        return res.status(404).json({
            success: false,
            response: {
                code: roadmap_added_fail,
                message: "roadmap not found",
            },
        });
    }

    return res.status(200).json({ roadmaps });
};

const addNewRoadmaps = async (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    console.log(req.body);
    const { title, desc, link, user } = req.body;

    let existingUser;

    try {
        console.log(title, desc ,user);
        existingUser = await User.findById(user);
        console.log(existingUser);
    } catch (e) {
        return console.log(e);
    }
    if (!existingUser) {
        return res.status(400).json({ message: " Unautorized" });
    }

    const roadmap = new Roadmap({
        title,
        desc,
        link,
        user,
    });

    try {
        await roadmap.save();

        return res.status(200).json({
            success: true,
            response: {
                code: "roadmap_added_success",
                message: "",
                data: {
                    roadmap,
                },
            },
        });
    } catch (e) {
        return res.status(403).json({
            success: false,
            response: {
                code: roadmap_added_fail,
                message: e,
            },
        });
    }
};
module.exports = { getAllRoadmaps, addNewRoadmaps };
