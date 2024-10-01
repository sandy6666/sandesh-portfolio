"use client";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";

const Skills = () => {
  return (
    <section className='bg-[#272730] text-white w-full flex flex-col gap-14 justify-center items-center h-auto py-40'>
      <div className='flex flex-col gap-8'>
        <h3 className='text-primary text-center font-bold text-6xl'>
          My Skills
        </h3>
        <p className='text-gray-300 text-center font-medium text-xl'>
          I thrive on turning complex problems into simple, beautiful solutions
          that enhance user satisfaction.
        </p>
      </div>
      <div className='cards flex flex-wrap justify-center gap-4'>
        <div className='h-[267px] w-[160px] px-9 flex flex-col gap-10 justify-center border-2 border-gray-600 rounded-xl hover:border-primary transition-colors duration-500'>
          <div className='flex justify-center'>
            <Image src='/react.svg' width={80} height={80} alt='html' />
          </div>
          <div className='flex flex-col text-center justify-center'>
            <p className='text-gray-400'>React</p>
          </div>
        </div>
        <div className='h-[267px] w-[160px] px-9 flex flex-col gap-10 justify-center border-2 border-gray-600 rounded-xl hover:border-primary transition-colors duration-500'>
          <div className='flex justify-center'>
            <Image src='/node-js.svg' width={80} height={80} alt='html' />
          </div>
          <div className='flex flex-col text-center justify-center'>
            <p className='text-gray-400'>Node</p>
          </div>
        </div>
        <div className='h-[267px] w-[160px] px-9 flex flex-col gap-10 justify-center border-2 border-gray-600 rounded-xl hover:border-primary transition-colors duration-500'>
          <div className='flex justify-center'>
            <Image
              className='filter-invert'
              src='/nextjs.svg'
              width={80}
              height={80}
              alt='html'
            />
          </div>
          <div className='flex flex-col text-center justify-center'>
            <p className='text-gray-400'>Next JS</p>
          </div>
        </div>
        <div className='h-[267px] w-[160px] px-9 flex flex-col gap-10 justify-center border-2 border-gray-600 rounded-xl hover:border-primary transition-colors duration-500'>
          <div className='flex justify-center'>
            <Image src='/mysql.svg' width={80} height={80} alt='html' />
          </div>
          <div className='flex flex-col text-center justify-center'>
            <p className='text-gray-400'>Mysql</p>
          </div>
        </div>
        <div className='h-[267px] w-[160px] px-9 flex flex-col gap-10 justify-center border-2 border-gray-600 rounded-xl hover:border-primary transition-colors duration-500'>
          <div className='flex justify-center'>
            <Image src='/mongodb.svg' width={80} height={80} alt='html' />
          </div>
          <div className='flex flex-col text-center justify-center'>
            <p className='text-gray-400'>Mongo</p>
          </div>
        </div>
        <div className='h-[267px] w-[160px] px-9 flex flex-col gap-10 justify-center border-2 border-gray-600 rounded-xl hover:border-primary transition-colors duration-500'>
          <div className='flex justify-center'>
            <Image src='/php.svg' width={80} height={80} alt='html' />
          </div>
          <div className='flex flex-col text-center justify-center'>
            <p className='text-gray-400'>php</p>
          </div>
        </div>
        <div className='h-[267px] w-[160px] px-9 flex flex-col gap-10 justify-center border-2 border-gray-600 rounded-xl hover:border-primary transition-colors duration-500'>
          <div className='flex justify-center'>
            <Image src='/python.svg' width={80} height={80} alt='html' />
          </div>
          <div className='flex flex-col text-center justify-center'>
            <p className='text-gray-400'>Python</p>
          </div>
        </div>
        <div className='h-[267px] w-[160px] px-9 flex flex-col gap-10 justify-center border-2 border-gray-600 rounded-xl hover:border-primary transition-colors duration-500'>
          <div className='flex justify-center'>
            <Image src='/docker-icon.svg' width={80} height={80} alt='html' />
          </div>
          <div className='flex flex-col text-center justify-center'>
            <p className='text-gray-400 mt-4'>Docker</p>
          </div>
        </div>
      </div>
      <div className='text-center'>
        <p className='text-gray-300 font-medium text-xl'>
          In addition, I have some knowledge such as:
        </p>
        <p className='font-bold text-xl'>
          Aws, Seo Management, Deploying Apps to production
        </p>
      </div>
    </section>
  );
};

export default Skills;
