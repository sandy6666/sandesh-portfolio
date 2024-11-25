"use client";
import { useState } from "react";
import Link from "next/link";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import { Herr_Von_Muellerhoff } from "next/font/google";

const herr = Herr_Von_Muellerhoff({ weight: "400", subsets: ["latin"] });

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-[#272730] text-white sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link href='/' className={`${herr.className} text-2xl font-bold`}>
              SS
            </Link>
          </div>

          {/* Navigation Items */}
          <div className='hidden md:flex space-x-4'>
            <Link
              href='/'
              className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
            >
              Home
            </Link>
            <Link
              href='#services'
              className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
            >
              Services
            </Link>
            <Link
              href='/blogs'
              className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
            >
              Blog
            </Link>
            <Link href='#contact'
              className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
            >
              Contact
            </Link>
          </div>

          {/* Dummy Text */}
          <div className='hidden md:flex gap-4 text-gray-300'>
            <Link
              href={
                "https://www.facebook.com/people/Sandesh-S/100079072175712/"
              }
              rel='noopener noreferrer'
              target='_blank'
            >
              <Facebook />
            </Link>
            <Link
              href={"https://x.com/imsandesh18"}
              rel='noopener noreferrer'
              target='_blank'
            >
              <Twitter />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/sandeshshivakumar/"}
              rel='noopener noreferrer'
              target='_blank'
            >
              <Linkedin />
            </Link>
            <Link
              href={"https://github.com/sandy6666/"}
              rel='noopener noreferrer'
              target='_blank'
            >
              <Github />
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              type='button'
              className='text-gray-300 hover:text-white focus:outline-none'
              aria-controls='mobile-menu'
              aria-expanded={isOpen ? "true" : "false"}
            >
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id='mobile-menu'
        className={`md:hidden w-1/2 fixed top-0 left-0 h-full bg-[#272730] text-white transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
          <Link
            href='/'
            className='block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium'
          >
            Home
          </Link>
          <Link
            href='#services'
            className='block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium'
          >
            Services
          </Link>
          <Link
            href='/blogs'
            className='block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium'
          >
            Blog
          </Link>
          <Link
            href='#contact'
            className='block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium'
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
