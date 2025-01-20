const express = require("express");
const { Users } = require("../db");
const router = express.Router()

router.post("/signup", async (req,res) => {
    console.log(req.body);
    const email =  req.body.email
    try {
        const isUserExist = await Users.findOne({email})
        console.log(isUserExist);
        
        if(isUserExist){
            return res.status(409).send({
                msg: "User with this email already exists."
            });
        }

        await Users.create(
            {
                ...req.body
            }
        )

        res.send({
            msg : "user created successfully"
        })

    } catch (error) {
        console.log(error);
        res.send({
            "msg" : "Error can't create user"
        })
        
    }


})

router.post("/login", async (req,res) => {
    console.log(req.body);
})

module.exports = router