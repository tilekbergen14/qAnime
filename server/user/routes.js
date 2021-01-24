import express from "express"
import User from "./model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const router = express.Router()

router.post("/signin/", async (req, res) => {
    const {password, email} = req.body
    try{
        const userExcisted = await User.findOne({email: email})
        if(!userExcisted) return res.status(404).json("User doesn't exist!")
        const correctPass = await bcrypt.compare(password, userExcisted.password)
        if(!correctPass) return res.status(400).json("Wrong password!")

        const token = jwt.sign({email: userExcisted.email, id: userExcisted._id}, 'test', {expiresIn: "1h"})
        res.send({result: userExcisted, token})
    }
    catch(error){
        res.send(500).json("Something goes wrong!")
    }
})

router.post("/signup/", async (req, res) => {
    try{
        const {firstName, lastName, email, password, confirmPassword} = req.body
    const userExist = await User.findOne({email: email})
    if(userExist) return res.status(400).json("User already exist with this email!")

    if(password !== confirmPassword) return res.status.json("Password not confirmed!")

    const hashedPass = await bcrypt.hash(password, 12)
    const user = await User.create({email, password: hashedPass, name: `${firstName} ${lastName}`})
    const token = jwt.sign({email, id: user._id}, 'test', {expiresIn: "1h"})
    res.status(201).json({result: user, token})
    }
    catch(error){
        res.status(500).json("Something went wrong!")
    }
})


export default router