import express from 'express'; /* So we have changed "type" to module, in package.json in root directory */

const app = express()  /* Creating the application */

/* server listening at port number 3000 */

app.listen(3000, () => {      

    console.log("Server is running on port 3000!");

});

/* Installing nodemon so that we do not need to restart server to see the changes 
Since we have changed the "scripts" in package.json, so while deploying, we need to write node api/index.js, not nodemon.
So now we can simply run saying npm run dev */