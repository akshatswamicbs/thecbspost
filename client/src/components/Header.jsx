import { Button, Navbar, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaMoon, FaSearch } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";




export default function Header() {
  return (
    <Navbar className='border-b-6 bg-gray-200'>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl dark:text-white'>
            <span>Insta Concepts</span>
        </Link>
        <div className='flex gap-4'>
          <Link to='/'>
            Home
          </Link>
          <Link to='/about'>
            About
          </Link>
          <Link to='/studymaterial'>
            Study Material
          </Link>
          <Link to='/videos'>
            Videos
          </Link>
          <Link to='/jobsportal'>
            Jobs
          </Link>
        </div>
        {/* <form className='flex gap-2'>
            <FaSearch className='h-7 w-7 mt-2'/>
            <TextInput type='text' placeholder='Search' className='hidden lg:inline' />
        </form> */}
        <div className='flex gap-2'>
          <Button className='h-10 w-10 pill' style={{backgroundColor:'black'}}>
          <FaMoon/>
          </Button>
          <Link to="/signup">
            <Button className='bg-black text-white hover:bg-gray-100'>
              Sign Up
            </Button>
          </Link>
        </div>
    </Navbar>
  )
}
