"use strict";

const serviceLocator = require("../lib/service_locator");
const mongoose = serviceLocator.get("mongoose");

const jsend = serviceLocator.get("jsend");

let users = mongoose.model("demoUser");

class Users {
  async createUserProflie(req, res) {
    try {
      let user = new users(req.payload);
      // create-user
      users = await user.save();
      return jsend(200, "Successfully User Profile was Created ", user);
    } catch (err) {
      console.log(err);
      res.notAcceptable(err);
    }
  }

  //   find one user details
  async findOneUserDetails(req, res) {
    try {
    //   let findUser;
    //   // Authontification
    //   if (!req.query.token) {
    //     return jsend(406, "Token is required");
    //   }
    //   var decoded = await jwt.verify(
    //     req.query.token,
    //     process.env.JWT_SECRET_KEY,
    //     { algorithms: ["HS256"] }
    //   );

    //   if (decoded) {
    //     findUser = await users.findOne({ _id: decoded._id });

    //     if (!findUser) {
    //       return jsend(406, "Un-Authorized Access");
    //     }
    //   } else {
    //     return jsend(406, "Un-Authorized Access");
    //   }

      let userDetail = await users.findOne({ _id: req.payload.id });
      console.log("jsdfkjsdfkjakjsdfkjdjfkjdkjfkjdskjfkjdfkjhkasjhdkfjdaskjlfhlkdasjhflkjaf",req.payload)

      if (userDetail) {
        return jsend(200, "Users details fetched successfully", userDetail);
      } else {
        return jsend(400, "Failed to delete all details");
      }
    } catch (e) {
      console.log(e);
      res.notAcceptable(e);
    }
  }

  // UPDATE VEHICLE DETAILS

//   async updateUserDetails(req, res) {
//     try {

//         let userDetail = await users.findOne({ _id: req.payload.id });
//         if (userDetail) {
//             _.each(Object.keys(req.payload), (key) => {
//               userDetail[key] = req.payload[key];
//             });
//         }

//     } catch (e) {
//       console.log(e);
//       res.notAcceptable(e);
//     }
//   }
}

module.exports = Users;
