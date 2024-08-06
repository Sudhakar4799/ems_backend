"use strict";

const serviceLocator = require("../lib/service_locator");
const mongoose = serviceLocator.get("mongoose");


  const EventSchema = new mongoose.Schema({
    type: String,
    shift: String, // 'day' or 'night'
    timestamp: { type: Date, default: Date.now },
  }); 
  
  const employeeSchema = new mongoose.Schema({
    name: String,
    employeeId:String,
    events: [EventSchema],
  });

module.exports = mongoose.model("empoyee", employeeSchema,"employees");