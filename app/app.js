/**
 *                               Ideoxan Web Server (4.0.0 alpha.1)
 * 
 * 
 *              $$$$$$$$\       $$\
 *              \__$$  _|       $$ |
 *                $$ |    $$$$$$$ |  $$$$$$\    $$$$$$\   $$\   $$\   $$$$$$\   /$$$$$$$\
 *               $$ |   $$  __$$ | $$  __$$\  $$  __$$\  \$$\ $$  |  \____$$\  $$  __$$ \
 *              $$ |   $$ /  $$ | $$$$$$$$ | $$ /  $$ |  \$$$$  /  $$$$$$$ |  $$ |  $$ |
 *             $$ |   $$ |  $$ | $$   ____| $$ |  $$ |  $$  $$<  $$  __$$ |  $$ |  $$ |
 *         $$$$$$$$\ \$$$$$$$ | \$$$$$$$\  \$$$$$$  | $$  /\$$\ \$$$$$$$ |  $$ |  $$ |
 *        \_______|  \______/  \_______|  \_______/  \__/  \__| \_______|  \__|  \__|
 * 
 *                   Ideoxan Is A Free To Use Online Tool To Learn Programming.
 *                                   https://github.com/ideoxan
 * 
 *
 *
 *            We Are Looking For Contributors! Https://github.com/ideoxan/contributing
 *        This Project Is Maintained And Governed In Accordance With The Project's Official
 *          Code Of Conduct. Agreement To Its Terms And Conditions, Along With Ideoxan's
 *       Official Terms Of Service, Ideoxan's Privacy Policy And The Included License (MIT)
 *                    Is Required To Contribute To This Organization's Project.
 * 
*/


/* ---------------------------------------------------------------------------------------------- */
/*                                             MODULES                                            */
/* ---------------------------------------------------------------------------------------------- */
/* ------------------------------------------- Express ------------------------------------------ */
const express                   = require('express')                // HTTP Server

/* ------------------------------------------ Utilities ----------------------------------------- */
const loadServerConfig          = require('./utilities/loadServerConfig')


/* ---------------------------------------------------------------------------------------------- */
/*                                         INITIALIZATION                                         */
/* ---------------------------------------------------------------------------------------------- */
/* ------------------------------------------- Config ------------------------------------------- */
// This attempts to load a server configuration
// If a custom one is not found, then the default is loaded
loadServerConfig()

/* ------------------------------------------- Express ------------------------------------------ */
// This creates the HTTP application
const app = express()





/* ---------------------------------------------------------------------------------------------- */
/*                                             EXPORTS                                            */
/* ---------------------------------------------------------------------------------------------- */
/* --------------------------------------------- App -------------------------------------------- */
module.exports = app