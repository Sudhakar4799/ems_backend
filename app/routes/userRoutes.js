"use strict";

const serviceLocator = require("../lib/service_locator");
const failAction = serviceLocator.get("failAction");
const user = serviceLocator.get("demoUsers");

exports.routes = (server,servicelocator)=>{
    return server.route([
        {

            path: "/demo/createUserProflie",
            method: "POST",
            handler: user.createUserProflie,
            // options: {
            //     auth: false,
            //     validate: {
            //         payload: require('../validations/user/createUserVaildation'),
            //         failAction: failAction
            //     }
            // },
        },
        {

            path: "/demo/findOneUserDetails",
            method: "POST",
            handler: user.findOneUserDetails,
            // options: {
            //     auth: false,
            //     validate: {
            //         payload: require('../validations/user/createUserVaildation'),
            //         failAction: failAction
            //     }
            // },
        },
    ])
}