import express from 'express'; /* So we have changed "type" to module, in package.json in root directory */
import mongoose from 'mongoose'; /* helps in easily interacting with mongoDB */
import dotenv from 'dotenv'; /* So that we can use the .env file here in the backend */
import userRoutes from './routes/user.route.js'

dotenv.config(); /* To configure the .env file */


/* Connecting to database. Password has to be given */
mongoose.connect(process.env.MONGO)
.then(() => {
    console.log('MongoDb is connected');  /* To make sure db is connected */
}).catch(err => {
    console.log(err);
});

const app = express()  /* Creating the application */

/* server listening at port number 3000 */

app.listen(3000, () => {      

    console.log("Server is running on port 3000");

});

app.use('/api/user', userRoutes);  /* Not 'get' because 'get' already there in user.routes.js
                                     The URL will be api/user/test because 'test' part is there in route 

/* Installing nodemon so that we do not need to restart server to see the changes 
Since we have changed the "scripts" in package.json, so while deploying, we need to write node api/index.js, not nodemon.
So now we can simply run saying npm run dev */

/* gitignore folder dragged to root directory so that unnecessary files do not get pushed */

/* Stopped at MongoDB error MongoAPIError: URI must include hostname, domain name, and tld  */
/* encoding for @ is    %40      */
/* Connection string is used in .env file ; So that when we upload to Github, our password does not get exposed along with the connection string.
The .env file added to gitignore so that it does not get uploaded to github */