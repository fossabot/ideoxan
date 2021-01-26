/* ---------------------------------------------------------------------------------------------- */
/*                                             MODULES                                            */
/* ---------------------------------------------------------------------------------------------- */
/* ------------------------------------------- Express ------------------------------------------ */
// Express HTTP Application
const express                   = require('express')



/* ---------------------------------------------------------------------------------------------- */
/*                                         INITIALIZATION                                         */
/* ---------------------------------------------------------------------------------------------- */
/* ------------------------------------------- Router ------------------------------------------- */
// Creates the router
const router = express.Router()

/* ------------------------------------------ Endpoint ------------------------------------------ */
const endpointLocation = '/'


/* ---------------------------------------------------------------------------------------------- */
/*                                           CONTROLLER                                           */
/* ---------------------------------------------------------------------------------------------- */
router.get(endpointLocation, async (req, res, next) => {
    try {
        return res.send('Hello, World!')
    } catch (err) {
        res.status(500)
        console.error(err)
    }
})


/* ---------------------------------------------------------------------------------------------- */
/*                                             EXPORTS                                            */
/* ---------------------------------------------------------------------------------------------- */
/* ------------------------------------------- Router ------------------------------------------- */
module.exports = router