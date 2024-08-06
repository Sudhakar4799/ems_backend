"use strict";

const serviceLocator = require("../lib/service_locator");
const employee = serviceLocator.get("employee");

exports.routes = (server,servicelocator)=>{
    return server.route([
        {

            path: "/demo/empoloyeeSheet",
            method: "POST",
            handler: employee.empoloyeeSheet,
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