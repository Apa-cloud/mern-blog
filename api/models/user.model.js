/* To create data models for user so that user has access only to certain data and has to follow some rules  */

import mongoose from 'mongoose';

/* Schema  */

const userSchema = new mongoose.Schema({    /* Rules (datatypes and fields) to be followed bu user  */
    username: {
        type: String,
        required: true,  /* username HAS to be there  */
        unique: true,    /* Two usernames cannot be the same  */
    },
    email: {
        type: String,
        required: true,  
        unique: true,    
    },
    password: {
        type: String,
        required: true,     /* Two passwords can be the same  */
    },
},  {timestamps: true}  /* For storing time of creation and update  */
);

/* Model */
const User = mongoose.model('User', userSchema);  /* Only User, mondoDb will automatically add "s" and make it Users */

export default User;  /* So that we can use it in other places in our app  */

