"use client";
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Projects = () => {
  return (
    <section className='bg-[#272730]'>
      <div className='flex flex-col gap-10 justify-center items-center h-auto pt-20 pb-40'>
        <h3 className='text-white text-center font-bold text-6xl'>
          My Projects
        </h3>
        <p className='text-gray-300 text-center font-medium text-xl'>
          Here are some of my personal projects.
        </p>
        <div className='projects mt-20'>
          <div className='flex flex-wrap justify-center gap-4'>
            <div
                className='bg-gray-900 text-white p-6 rounded-lg w-[300px] sm:w-[400px] md:w-[550px] lg:w-[640px] h-[400px] sm:h-[500px] lg:h-[660px] mx-auto shadow-md border-gray-600 hover:border-white border-2 transition-colors duration-500'>
              {/* Image Section */}
              <div className='relative w-full h-[85%] mb-4'>
                <Link
                    href='https://3d-portfolio-gilt-delta.vercel.app/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                  <Image
                      src='/portfolio-framer.png'
                      alt='Project Image'
                      layout='fill'
                      objectFit='cover'
                      className='rounded-lg'
                  />
                </Link>
              </div>

              {/* Title and Description */}
              <div className='flex justify-between items-center'>
                <div>
                  <Link
                      href='https://3d-portfolio-gilt-delta.vercel.app/'
                      target='_blank'
                      rel='noopener noreferrer'
                  >
                    <h2 className='text-2xl font-bold mb-2'>3D Portfolio</h2>
                  </Link>
                  <Link
                      href='https://3d-portfolio-gilt-delta.vercel.app/'
                      target='_blank'
                      rel='noopener noreferrer'
                  >
                    <p className='text-gray-400'>
                      Build in React using Three.js
                    </p>
                  </Link>
                </div>

                {/* Arrow Icon */}
                <div>
                  <Link
                      href='https://3d-portfolio-gilt-delta.vercel.app/'
                      target='_blank'
                      rel='noopener noreferrer'
                  >
                    <button className='bg-gray-800 p-3 rounded-full hover:bg-white transition-colors duration-500'>
                      <ArrowUpRight className=''/>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
              <div
                className='bg-gray-900 text-white p-6 rounded-lg w-[300px] sm:w-[400px] md:w-[550px] lg:w-[640px] h-[400px] sm:h-[500px] lg:h-[660px] mx-auto shadow-md border-gray-600 hover:border-white border-2 transition-colors duration-500'>
              {/* Image Section */}
              <div className='relative w-full h-[85%] mb-4'>
                <Link
                    href='https://type-speed-1873.netlify.app/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                  <Image
                      src='/typespeed.png'
                      alt='Project Image'
                      layout='fill'
                      objectFit='cover'
                      className='rounded-lg'
                  />
                </Link>
              </div>

              {/* Title and Description */}
              <div className='flex justify-between items-center'>
                <div>
                  <Link
                      href='https://type-speed-1873.netlify.app/'
                      target='_blank'
                      rel='noopener noreferrer'
                  >
                    <h2 className='text-2xl font-bold mb-2'>Test your typing speed</h2>
                  </Link>
                  <Link
                      href='https://type-speed-1873.netlify.app/'
                      target='_blank'
                      rel='noopener noreferrer'
                  >
                    <p className='text-gray-400'>
                      Build using vanilla JS
                    </p>
                  </Link>
                </div>

                {/* Arrow Icon */}
                <div>
                  <Link
                      href='https://type-speed-1873.netlify.app/'
                      target='_blank'
                      rel='noopener noreferrer'
                  >
                    <button className='bg-gray-800 p-3 rounded-full hover:bg-white transition-colors duration-500'>
                      <ArrowUpRight className=''/>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
