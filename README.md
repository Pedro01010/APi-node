# APi-node
API-connection:


![nos](https://user-images.githubusercontent.com/114010190/233815213-e18edd5b-d255-4833-828c-6107a59b5c8c.png)<br><br>
![imso](https://user-images.githubusercontent.com/114010190/233815218-6d9848a9-3fda-4bd8-bb1b-ccbf03a84a1d.png)<br><br>

# SPAN-protection 
Com proteção contra spam utilizando método rate-limit e slow-down <br><br>
const {requests}= require('@config/index')<br>
const rateLimit = require('express-rate-limit')<br>
const slowDown = require('express-slow-down')<br>
const limiter = rateLimit({<br>
    windowMs: requests.rateLimit.window,<br>
    max: requests.rateLimit.max,<br>
})<br>
 const slower = slowDown({<br>
    windowMs: requests.slowDown.window,<br>
    delayAfter:requests.slowDown.delayAfter,<br>
    delayMs:requests.slowDown.delayMs<br>

 })<br>
module.exports = [<br>
    slower,<br>
    limiter,<br>
]<br>
