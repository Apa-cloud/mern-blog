import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Label } from 'flowbite-react'
import { TextInput } from 'flowbite-react';

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>  {/* To bring down the margin top mt */}
    <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>  {/* div covering both left and right */}
      
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
          Welcome to my blog!   You can sign up with your email and password or with Google. 
        </p>
      </div>


      {/* right side div */}
      <div className='flex-1'> 
        <form className='flex flex-col gap-4'>   {/* We need form, bec. uname, mail and pass will be entered */}
           <div>              {/* div means a separate group */}
            <Label value= 'Your username' />
            <TextInput type='text' placeholder='Username' id='username' />
           </div>    
           <div>              {/* div means a separate group */}
            <Label value= 'Your email' />
            <TextInput type='text' placeholder='Email' id='email' />
           </div>  
           <div>              {/* div means a separate group */}
            <Label value= 'Your password' />
            <TextInput type='text' placeholder='Password' id='password' />
           </div> 

           {/* Sign Up button */}     
           <Button gradientDuoTone='redToYellow' type='submit'>
            Sign Up
           </Button>
         </form>
         <div className='text-sm flex gap-2 mt-5'>
          <span>Already have an account?</span>
          <Link to='/sign-in' className='text-green-700'>
          Sign In
          </Link>
         </div>
         
        </div>   {/* Right side div */}
    </div>
  </div>
  );
}

{/* flex: object stretches or shrinks acc. to space available ;
  mx-auto: comes to centre when screen is big ;
  flex-col, to have the items inside that tag, on TOP OF EACH OTHER;
  flex-row, to have BESIDE EACH OTHER; */}
