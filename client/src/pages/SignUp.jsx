import React, { useState } from 'react'
import logo from '../images/iclogo.jpg'
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import { FaBlackTie } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { set } from 'mongoose'

export default function SignUp() {
  const [formData,setFormData]=useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();
  const handleChange = (e) =>{
    setFormData({...formData,[e.target.id]:e.target.value})
  };
  const handleSubmit= async(e)=>{
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password){
      return setErrorMessage("Please fill out all the fields.");
    }
    try{
      setLoading(true);
      setErrorMessage(null);
      const res=await fetch('/api/auth/signup',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formData)
      });
      const data= await res.json();
      if(data.success===false){
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok){
        navigate('/signin');
      }
    }
    catch(error){
      setErrorMessage(error.message);
      setLoading(false);
    }
  }
  return (
    <div className='min-h-screen'>
      <div className='flex gap-1' >
        {/* left */}
        <div style={{ marginLeft: '200px', textAlign:'center'}} className='flex-col gap-1 mt-5'>
          <img src={logo} style={{height:'250px',borderRadius:'45%'}}/>
          <p className='mt-4' style={{paddingRight:'200px',textAlign:'center', height:'200px'}}>Insta Concepts: Your Ultimate Finance and Accounting Guide for CA Aspirants!
           Master the intricacies of financial principles and accounting practices with our expert coaching and tutorials. Start your journey towards CA success today!</p>
        </div>
        {/* right */}
        <div className='mt-12' style={{width:'400px',border:'2px 1px black', marginRight:'150px'}}>
          <form className='flex-cols' onSubmit={handleSubmit}  style={{fontSize:"30px"}}  >
            <div>
              <Label value='Username' className='text-xl'    />
              <TextInput type='text' placeholder='Enter your username' id='username'  onChange={handleChange} />
            </div>
            <div>
              <Label value='Email' className='text-xl'/>
              <TextInput type='email' placeholder='Enter your email' id='email' onChange={handleChange} />
            </div>
            <div>
              <Label value='Password' className='text-xl'/>
              <TextInput type='password' placeholder='Enter your password' id='password' onChange={handleChange} />
            </div>
            <Button className='mt-2' style={{width:'400px',backgroundColor:'#333333'}} onClick={handleSubmit} disabled={loading}>
              {loading ? (
                  <>
                  <Spinner size='sm'></Spinner>
                  <span className='pl-3'>Loading...</span>
                  </>
                ) : 'Sign Up'
              }
              </Button>
            <Button className='mt-2' style={{width:'400px',backgroundColor:'gray'}}>Continue with Google</Button>
          </form>
          <div className='mt-2'>
            <span>Already have an account? </span>
            <Link to='/signin' className='text-blue-800'>
            SignIn
            </Link>
            {
              errorMessage && (
                <Alert className='mt-5' color='failure'>
                  {errorMessage}
                </Alert>
              )}
          </div>

        </div>
      </div>
    </div>
  )
}

