// import { Button, Navbar, TextInput } from 'flowbite-react'
// import React from 'react'
// import { Link } from 'react-router-dom'
// import { FaMoon, FaSearch } from "react-icons/fa";
// import { CiSearch } from "react-icons/ci";




// export default function Header() {
//   return (
//     <Navbar className='border-b-6 bg-gray-200'>
//         <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl dark:text-white'>
//             <span>Insta Concepts</span>
//         </Link>
//         <div className='flex gap-4'>
//           <Link to='/'>
//             Home
//           </Link>
//           <Link to='/about'>
//             About
//           </Link>
//           <Link to='/studymaterial'>
//             Study Material
//           </Link>
//           <Link to='/videos'>
//             Videos
//           </Link>
//           <Link to='/jobsportal'>
//             Jobs
//           </Link>
//         </div>
//         {/* <form className='flex gap-2'>
//             <FaSearch className='h-7 w-7 mt-2'/>
//             <TextInput type='text' placeholder='Search' className='hidden lg:inline' />
//         </form> */}
//         <div className='flex gap-2'>
//           <Button className='h-10 w-10 pill' style={{backgroundColor:'black'}}>
//           <FaMoon/>
//           </Button>
//           <Link to="/signup">
//             <Button className='bg-black text-white hover:bg-gray-100'>
//               Sign Up
//             </Button>
//           </Link>
//         </div>
//     </Navbar>
//   )
// }

import { Button, Navbar } from 'flowbite-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaMoon, FaBars } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <Navbar className='border-b-6 bg-gray-200 py-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to="/" className='text-2xl dark:text-white'>
          <span style={{ fontFamily: 'arial' }}>Mannu Bhaiya</span>
        </Link>
        <div className='md:hidden'>
          <Button onClick={toggleMenu} className='h-10 w-10 pill bg-black hover:bg-gray-700 transition-colors duration-300'>
            <FaBars />
          </Button>
        </div>
        <div className={`md:flex md:items-center mr-2 md:justify-center md:gap-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className='md:flex md:gap-4'>
            <Link to='/' className='block px-3 py-2 text-sm font-normal hover:text-gray-600 transition-colors duration-300 relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-gray-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300'>
              Home
            </Link>
            <Link to='/about' className='block px-3 py-2 text-sm font-normal hover:text-gray-600 transition-colors duration-300 relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-gray-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300'>
              About
            </Link>
            <Link to='/studymaterial' className='block px-3 py-2 text-sm font-normal hover:text-gray-600 transition-colors duration-300 relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-gray-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300'>
              Study Material
            </Link>
            <Link to='/videos' className='block px-3 py-2 text-sm font-normal hover:text-gray-600 transition-colors duration-300 relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-gray-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300'>
              Videos
            </Link>
            <Link to='/jobsportal' className='block px-3 py-2 text-sm font-normal hover:text-gray-600 transition-colors duration-300 relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-gray-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300'>
              Jobs
            </Link>
          </div>
          <div className='flex items-center gap-2 ml-3 mt-4 md:mt-0'>
            <Link to="/signup">
              <Button className='bg-black text-white hover:bg-gray-700 transition-colors duration-300'>
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Navbar>
  )
}