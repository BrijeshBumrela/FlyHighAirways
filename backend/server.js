/* package imports */
const express = require('express');


/* constants */
const port = 5000;
const app = express();


/* start server */
console.log("listning on port", port);
app.listen(port);
