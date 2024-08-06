"use strict"

module.exports = () => ({
    app:{
        name:process.env.APP_NAME,
        port:process.env.APP_PORT,
        environment:process.env.APPLICATION_ENV,
        logpath:process.env.LOG_PATH
    },
    mongo:{
        uri:process.env.DB_URI
    },
    application_logging: {
        file: process.env.LOG_PATH,
        level: process.env.LOG_LEVEL || "info",
        console: process.env.LOG_ENABLE_CONSOLE || true,
      },
})