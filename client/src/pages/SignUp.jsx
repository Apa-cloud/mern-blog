import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Label, Alert, Spinner } from 'flowbite-react'
import { TextInput } from 'flowbite-react';

export default function SignUp() {

  /* We have to take the data from the input of the form */
  const [formData, setFormData] = useState({}); /* Taking value from state and storing it in formData using setFormData() fn */
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {                 /* handleChange fn we have defined */
    setFormData({...formData, [e.target.id]: e.target.value.trim() });  /* identifying fields by id */
  };
  
  const handleSubmit = async (e) => {   /* Submission means commncatn with db, so takes time, so await and aync opn */
    e.preventDefault();                 /* To prevent page from refreshing on Submit */
    
    if (!formData.username || !formData.email || !formData.password) {   //error if user entered space
      return setErrorMessage('Please fill out all fields.');
    }

    /* Using the api POST request to take the input */
    try {
      setLoading(true);  //cleaning 
      setErrorMessage(null);
      const res = await fetch('api/auth/signup', 
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(formData),  /* Coverting json to string */
        });
        const data = await res.json();
        if (data.success === false) {  //also Error msg
          return setErrorMessage(data.message);
        }
        setLoading(false);  // no loading effect if no error
        if(res.ok) {
          navigate('/sign-in');  //If sign up successful, REDIRECTED to Sign In page
        }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };
  
  return (
    <div className='min-h-screen mt-20'>  {/* To bring down the margin top mt */}
    <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>  {/* div covering both left and right; med or higher: flex beside, small: on top of each other */}
      
      {/* left side div */}
      <div className='flex-1'>  {/* So that left and right occupy equal space */}
      <Link 
        to='/' 
        className='font-bold dark:text-white text-4xl'> 

          <span className='px-2 py-1 bg-gradient-to-r from-blue-400
           via-green-300 to-yellow-200 rounded-lg text-white'>
            Apa's
            </span> 
        Blog  
        </Link>
        <p className='text-sm mt-5'>    {/* Paragraph */}
          Welcome to my blog! You can sign up with your email and password or with Google. 
        </p>
      </div>


      {/* right side div */}
      <div className='flex-1'> 
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>   {/* We need form, bec. uname, mail and pass will be entered */}
           <div>              {/* div means a separate group */}
            <Label value= 'Your username' />
            <TextInput type='text' placeholder='Username' id='username' onChange={handleChange}/> {/* When change (input) in any field, our fn handleChange will be called */}
           </div>    
           <div>              {/* div means a separate group */}
            <Label value= 'Your email' />
            <TextInput type='email' placeholder='Email' id='email'onChange={handleChange} />
           </div>  
           <div>              {/* div means a separate group */}
            <Label value= 'Your password' />
            <TextInput type='password' placeholder='Password' id='password'onChange={handleChange} />   {/* password: psswrd will be hidden */}
           </div> 

           {/* Sign Up button */}     
           <Button gradientDuoTone='redToYellow' type='submit' disabled={loading}>
           {loading ? ( //Spinning icon
                <>
                  <Spinner size='sm' />  
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign Up'
              )}
           </Button>
         </form>
          
          {/* Already have account? option */}
         <div className='text-sm flex gap-2 mt-5'>
          <span>Already have an account?</span>
          <Link to='/sign-in' className='text-blue-500'>
          Sign In
          </Link>
         </div>

         {
         errorMessage && (   //Alert message
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}

        </div>   {/* Right side div */}
    </div>
  </div>
  );
}

/* flex: object stretches or shrinks acc. to space available ;
  
  mx-auto: comes to centre when screen is big ;
  
  flex-col, to have the items inside that tag, on TOP OF EACH OTHER;
  flex-row, to have BESIDE EACH OTHER; 

  onChange{}: on Change Event listener
  onSubmit{}: on Submit event listener
  
  const [formData, setFormData] = useState({}):   
  useState({}): React Hook that lets you add a state variable to your component.
  formData: variable for the state
  setFormData(): fn that lets us change the values in formData
  
  ...formData, so that when pass given, user and mail values also retained in state object, and so on.. , then we can access desired fields by their id ;
  
  > We need to add PROXY bec. frontend url is lochost 5173, and backend URL is lochost 3000 */
