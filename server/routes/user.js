// const express = require("express");
// const { Users } = require("../db");
// const router = express.Router();
// const jwt = require("jsonwebtoken");

// router.post("/signup", async (req, res) => {
//   console.log(req.body);
//   const email = req.body.email;
//   try {
//     const user = await Users.findOne({ email });
//     console.log(user);

//     if (user) {
//       return res.status(409).send({
//         msg: "User with this email already exists.",
//       });
//     }

//     await Users.create({
//       ...req.body,
//     });

//     res.send({
//       msg: "user created successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     res.send({
//       msg: "Error can't create user",
//     });
//   }
// });

// router.post("/login" , async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await Users.findOne({
//       email: email,
//       password: password,
//     });
//     console.log("user exits :", user);
//     if (user) {
//       const token = jwt.sign({ _id: user._id, email,password }, "ukfhnsdfkjh", {
//         expiresIn: "1h",
//       });

//       return res.cookie("Authorization",token , {
//         httpOnly: true,
//         secure: false, // Set to true in production (requires HTTPS)
//         sameSite: 'strict',
//         maxAge: 3600000, // 1 hour
//       }).status(200).send({
//         msg: "user login successfully",
//         user: user,
//       });
//     }
//     return res.status(401).send({
//       msg: "Invalid email and password",
//     });

//   } catch (error) {
//     console.log(error);
//     res.send({
//       msg: "Someting wend wrong",
//     });
//   }

//   res.send({
//     msg: "login",
//   });
// });

// module.exports = router;

const express = require("express");
const { Users } = require("../db");
const router = express.Router();
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/signup", async (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  try {
    const isUserExist = await Users.findOne({ email });
    console.log(isUserExist);

    if (isUserExist) {
      return res.status(409).send({
        msg: "User with this email already exists.",
      });
    }

    await Users.create({
      ...req.body,
    });

    res.send({
      msg: "user created successfully",
    });
  } catch (error) {
    console.log(error);
    res.send({
      msg: "Error can't create user",
    });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({
      email: email,
      password: password,
    });
    console.log("user exits :", user);
    if (user) {
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      return res
        .cookie("token", token, {
          httpOnly: true,
          secure: false, // Set to true in production (requires HTTPS)
          // sameSite: 'strict',
          maxAge: 3600000, // 1 hour
        })
        .status(200)
        .send({
          msg: "user login successfully",
          user: user,
          authToken: token,
        });
    }
    return res.status(401).send({
      msg: "Invalid email and password",
    });
  } catch (error) {
    console.log(error);
    res.send({
      msg: "Someting wend wrong",
    });
  }

  res.send({
    msg: "login",
  });
});

router.get("/userData", authMiddleware, async (req, res) => {
  // const _id = req.userId
  // const userVendors = await Users.findOne({ _id });

  // const userId = req.headers.authorization
  // console.log(userId);
  const userId = req.userId;
  console.log(userId);

  res.send({
    msg: "getinng....",
  });
});

module.exports = router;
