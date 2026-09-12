import React, { useState } from 'react'
import { navLinks } from '../constants/navLinks'
import { Link, NavLink } from 'react-router-dom'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
function Navbar() {
  const [open, setOpen] = useState(false)

  const ScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  return (
    <nav className='bg-green-900 text-white fixed w-full font-bold'>
      <div className='flex justify-between items-center'>
        <NavLink to="/" className="ml-4 p-2 flex flex-row justify-center items-center gap-2">
          <img src="/me.png" alt="" className='h-12 w-12 rounded-full' />
          <h1 className='font-bold font-serif italic'>Rakshya Gharti Magar</h1>
        </NavLink>
        <button onClick={() => setOpen(!open)} className=' p-2 font-bold text-xl mr-5 md:hidden '>{open ? <HiOutlineX /> : <HiOutlineMenu />}</button>

        <ul className='md:flex hidden gap-5 mr-10'>
          {
            navLinks.map((link, index) => (
              <li key={index}>
                <Link onClick={ScrollTop} to={link.path}>{link.name}</Link>
              </li>

            ))
          }
        </ul>
      </div>

      {
        open &&
        <ul className='flex flex-col md:hidden gap-5 mr-10 p-4 border border-gray-300 w-full'>
          {
            navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path} onClick={() => {
                  { ScrollTop }
                  setOpen(false)

                }

                }>{link.name}</Link>
              </li>

            ))
          }
        </ul>
      }

    </nav>
  )
}

export default Navbar