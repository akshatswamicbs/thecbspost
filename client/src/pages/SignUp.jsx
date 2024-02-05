import React from 'react'
import logo from '../images/logomain.png'
import { Button, Label, TextInput } from 'flowbite-react'
import { FaBlackTie } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='min-h-screen'>
      <div className='flex gap-10'>
        {/* left */}
        <div style={{ marginLeft: '200px', textAlign:'center', width:'400px'}} className='flex-col gap-1 overflow-hidden mt-10'>
          <img src={logo} style={{height:'250px'}}/>
          <p className='mt-4'>The CBS Post is the newsletter of Shaheed Sukhdev College of Business Studies. Reaching out to an audience of over a thousand students, we aim to provide a 
            platform for our readers to be exposed to ideas in the sphere of management
            and build a sense of community within CBS, sharing
             a proud legacy of the institution we call home.</p>
        </div>
        {/* right */}
        <div className='mt-12' style={{width:'400px'}}>
          <form className='flex-cols'>
            <div>
              <Label value='Username' className='text-xl'/>
              <TextInput type='text' placeholder='Enter your username' id='username' />
            </div>
            <div>
              <Label value='Email' className='text-xl'/>
              <TextInput type='text' placeholder='Enter your email' id='email'/>
            </div>
            <div>
              <Label value='Password' className='text-xl'/>
              <TextInput type='text' placeholder='Enter your password' id='password'/>
            </div>
            <Button className='mt-2' style={{width:'400px',backgroundColor:'#333333'}}>Sign Up</Button>
            <Button className='mt-2' style={{width:'400px',backgroundColor:'gray'}}>Continue with Google</Button>
          </form>
          <div className='mt-2'>
            <span>Already have an account? </span>
            <Link to='/signin' className='text-blue-800'>
            SignIn
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
