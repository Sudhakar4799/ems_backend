"use strict";

const serviceLocator = require("../lib/service_locator");
const mongoose = serviceLocator.get("mongoose");

const jsend = serviceLocator.get("jsend");

let empoyee = mongoose.model("empoyee");

let users = mongoose.model("demoUser");

class Employees {
  async empoloyeeSheet(req, res) {
    try {
      console.log(req.payload,"jjj");
      let checkEmployeeDetails = await users.findOne({ _id: req.payload.employeeId });

      if (!checkEmployeeDetails) {
        return jsend(400, "User not found");
      }

      // already check details

      let checkAndUpdateDetails = await empoyee.findOne({
        employeeId: req.payload.employeeId,
      });
    //   let empoyees;
      if (checkAndUpdateDetails) {
        checkAndUpdateDetails.events.push({
          type: req.payload.eventType,
          timestamp: new Date(),
        });
        // create-user
      checkAndUpdateDetails = await checkAndUpdateDetails.save();
      return jsend(200, "Successfully empoyees Profile was Created ", checkAndUpdateDetails);
      } else {
        let empoyees = new empoyee(req.payload);

        empoyees.events.push({
          type: req.payload.eventType,
          timestamp: new Date(),
        });
        // create-user
      empoyees = await empoyees.save();
      return jsend(200, "Successfully empoyees Profile was Created ", empoyees);
      }

      // create-user
    //   empoyees = await empoyees.save();
    //   return jsend(200, "Successfully empoyees Profile was Created ", empoyees);
    } catch (err) {
      console.log(err);
      res.notAcceptable(err);
    }
  }
}

module.exports = Employees;
