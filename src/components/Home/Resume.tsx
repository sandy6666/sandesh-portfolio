import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const Resume = () => {
  return (
    <section className={"bg-[#121212]"}>
      <div
        className={
          "h-auto py-36 flex justify-center items-center px-4 md:px-40"
        }
        style={{
          backgroundImage: `url('/background1.png')`,
        }}
      >
        <div className={"w-full flex flex-col gap-6"}>
          <h2 className={"text-6xl font-bold text-[#6E4EF2]"}>My Resume</h2>
          <div className={"flex justify-between text-xl text-[#bcbcbe]"}>
            I believe that working hard and trying to learn every day will{" "}
            <br />
            make me improve my skillsets.
            <button
              className={
                "w-[176px] h-[58px] text-sm font-bold rounded-xl text-white flex justify-center items-center gap-2 gradient-primary"
              }
            >
              {" "}
              Get in touch <ArrowUpRight />
            </button>
          </div>
          <div className='exp-and-edu-cards gap-10 flex flex-col lg:flex-row'>
            <div className='education h-full flex flex-col md:flex-1 bg-[#24242D] w-full p-10 rounded-lg border-2 border-gray-600'>
              <div className='flex w-full items-center h-[53px]'>
                <div className='border-b-2 border-white h-full flex items-center'>
                  <Image
                    className='pb-2 pr-1'
                    alt='education-icon'
                    src={"/icon-1.svg"}
                    width={50}
                    height={50}
                  />
                </div>
                <div className='text-white font-semibold border-b-2 w-full h-full border-gray-600 text-4xl pb-1'>
                  Education
                </div>
              </div>
              <div className='text-white mt-10'>
                <div className='p-4 border-white border-[1px] rounded-xl hover:border-white transition-colors duration-500'>
                  <div className='font-extrabold text-white'>2015-2019</div>
                  <h5 className='font-bold text-2xl'>
                    Bachelor of Engineering
                  </h5>
                  <div className='font-light text-[#8f8f92]'>
                    Visvesvaraya Technological University
                  </div>
                </div>
              </div>
            </div>
            <div className='experience h-full flex flex-col md:flex-1 bg-[#24242D] w-full p-10 rounded-lg border-2 border-gray-600'>
              <div className='flex w-full items-center h-[53px]'>
                <div className='border-b-2 border-white h-full flex items-center'>
                  <Image
                    className='pb-2 pr-1'
                    alt='experience-icon'
                    src={"/icon-2.svg"}
                    width={40}
                    height={40}
                  />
                </div>
                <div className='text-white font-semibold border-b-2 w-full h-full border-gray-600 text-4xl pb-1'>
                  Experience
                </div>
              </div>
              <div className='text-white mt-10'>
                <div className='p-4 border-white border-[1px] flex rounded-xl justify-between hover:border-white transition-colors duration-500'>
                  <div className=''>
                    <div className='font-extrabold text-white'>
                      2021-Present
                    </div>
                    <h5 className='font-bold text-2xl'>
                      Team Lead - Full stack Developer
                    </h5>
                    <div className='font-light text-[#8f8f92]'>
                      Codilar Technologies
                    </div>
                  </div>
                  <Image
                    alt='codilar-logo'
                    src={"/codilar.png"}
                    width={70}
                    height={10}
                  />
                </div>
              </div>
              <div className='text-white mt-10'>
                <div className='p-4 border-white border-[1px] flex rounded-xl justify-between hover:border-white transition-colors duration-500'>
                  <div className=''>
                    <div className='font-extrabold text-white'>2019-2021</div>
                    <h5 className='font-bold text-2xl'>Software Developer</h5>
                    <div className='font-light text-[#8f8f92]'>
                      Codilar Technologies
                    </div>
                  </div>
                  <Image
                    alt='codilar-logo'
                    src={"/codilar.png"}
                    width={70}
                    height={10}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
