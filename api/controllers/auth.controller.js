import User from '../models/user.model.js'; /* Importing User model to store the credentials entered */
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {  /* async bec. it needs to wait for user to choose for it */
    const { username, email, password } = req.body;                   /* User will enter signup credentials in body section of api testing app */

    if (!username || !email || !password || username === '' || email === '' || password === ''){
        return res.status(400).json({ message: 'All fields are required '});  /* Giving error if any required credential is not given or empty */
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);  /* 'await' is in-built inside this fn.  Here, (10) is the no. of rounds that will be mixed in order to secure the password */

    const newUser = new User({ /* Storing data inside object of User model  */
        username,
        email,
        password: hashedPassword,  /* Encrypted password */
    });
   
    
    try {
        await newUser.save();  /* Saving in database */
        res.json('Signup successful!') /* creating json response to confirm */
    } catch (error) {
      res.status(500).json({ message: error.message });  /* To make the error appear properly in app, not here on terminal */
    }
};

/* We need to install bcryptjs to hash the password so that it is not exposed inside database */
