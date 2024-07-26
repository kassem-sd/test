import User from "../models/user.js";

export const getNames = (req,res,next) =>{
    res.json({text: "there is no names"});
};

export const getIds = (req,res,next) =>{
    res.json({text: "there is no ids"});
};

export const createUser = async (req,res,next) =>{
    console.log(`username: ${req.body.username}`);
    const newUser = new User({username: req.body.username, userpass: req.body.password});
    await newUser.save();
    res.json({text: "there is no ids"});
};