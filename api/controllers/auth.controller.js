import User from '../models/user.model.js'; /* Importing User model to store the credentials entered */
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';  // For user authentication in Sign In page

export const signup = async (req, res, next) => {  /* async bec. it needs to wait for user to choose for it ; 'next' in order to use the middleware */
    const { username, email, password } = req.body;                   /* User will enter signup credentials in body section of api testing app */

    if (!username || !email || !password || username === '' || email === '' || password === ''){
        next(errorHandler(400, 'All fields are required '));      /* Using middleware to give error */
    }    /* Giving error if any required credential is not given or empty */
    

    const hashedPassword = bcryptjs.hashSync(password, 10);  /* 'await' is in-built inside this fn.  Here, (10) is the no. of rounds that will be mixed in order to secure the password */

    const newUser = new User({ /* Storing data inside new object of User model  */
        username,
        email,
        password: hashedPassword,  /* Encrypted password */
    });
   
    
    try {
        await newUser.save();  /* Saving in database */
        res.json('Signup successful!') /* creating json response to confirm */
    } catch (error) {
      next (error);  /* To make the error appear properly in app, not here on terminal ; Using the middleware*/
    }
};


export const signin = async (req, res, next) => {
    const { email, password } = req.body;

  if (!email || !password || email === '' || password === '') {
    next(errorHandler(400, 'All fields are required'));
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, 'User not found'));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, 'Invalid password'));
    }
    const token = jwt.sign(
      { id: validUser._id, isAdmin: validUser.isAdmin },
      process.env.JWT_SECRET
    );

    const { password: pass, ...rest } = validUser._doc;  // separating password so that that isn,t shown back in Sign In

    res
      .status(200)
      .cookie('access_token', token, {  //access_token is encrypted value of database ID of user
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }

};

export const google = async (req, res, next) => {
  const { email, name, googlePhotoUrl } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password, ...rest } = user._doc;
      res
        .status(200)
        .cookie('access_token', token, {
          httpOnly: true,
        })
        .json(rest);
    } else {
      const generatedPassword =    // Random password bec. we cannot sign in without it
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        username:
          name.toLowerCase().split(' ').join('') +
          Math.random().toString(9).slice(-4),
        email,
        password: hashedPassword,
        profilePicture: googlePhotoUrl,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET); // create token, separate password from rest to hide it
      const { password, ...rest } = newUser._doc;
      res
        .status(200)
        .cookie('access_token', token, {
          httpOnly: true,
        })
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};

/* We need to install bcryptjs to hash the password so that it is not exposed inside database */
