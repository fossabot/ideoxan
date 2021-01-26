const c = require('chalk')

module.exports = (statusCode) => {
    if (statusCode >= 500) {                        // If code 5xx...
        return c.redBright.bold(statusCode)             // Red code
    } else if (statusCode >= 400) {                 // If code 4xx...
        return c.yellow.bold(statusCode)                // Yellow code
    } else if (statusCode >= 300) {                 // If code 3xx...
        return c.cyan.bold(statusCode)                  // Cyan code
    } else if (statusCode >= 200) {                 // If code 2xx...
        return c.green.bold(statusCode)                 // Green code
    } else return c.gray.bold('INCOMPLETE')         // Otherwise incomplete
}
