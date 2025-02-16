
import { Navbar} from 'flowbite-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';



export default function Header() {
 
  return (
    <Navbar className='border-b-2'>
      {/* Logo linking to home page */}
      <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className=''>Color picker</span>
      </Link>

      {/* Section for buttons and navigation links */}
      <div className='flex gap-2 md:order-2'>
        {/* Button to toggle light/dark theme */}
       

        {/* Conditional rendering based on whether user is logged in */}
       
        {/* Navbar toggle button */}
        <Navbar.Toggle />
      </div>

      {/* Collapsible navigation links */}
      <Navbar.Collapse>
       
          <Link to='/'>Home</Link>
      
      
          <Link to='/about'>About Us</Link>
       
      </Navbar.Collapse>
    </Navbar>
  );
}
