import React from "react";
import { ArrowDownToLine } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className={"bg-[#121212] h-[860px]"}>
      <div
        className={"filter-invert h-full flex items-center"}
        style={{
          backgroundImage: `url('/background.png')`,
        }}
      >
        <div className={"w-full flex flex-col lg:w-3/4 px-10 md:px-28 gap-6"}>
          <p className={"text-xl text-white filter-invert"}>
            👋 Hi there, I&apos;m
          </p>
          <h1 className={"text-7xl"}>Sandesh S</h1>
          <p className={"text-xl text-[#575454]"}>
            I assist individuals and brands in achieving their objectives by
            creating and developing user-focused digital products and
            interactive experiences.
          </p>
          <div>
            <Link
              href={
                "https://drive.google.com/file/d/1gM5NGw4N68XjQfIcV89dErm0i73A0qZo/view?usp=sharing"
              }
              rel='noopener noreferrer'
              target='_blank'
              className={
                "w-[176px] h-[58px] text-sm font-bold rounded-xl text-white flex justify-center items-center gap-2 gradient-primary filter-invert"
              }
            >
              {" "}
              Download CV <ArrowDownToLine />
            </Link>
          </div>
          <div className={"text-xl text-[#575454]"}>
            + 5 years with professional web development
          </div>
          <div className={"flex gap-3"}>
            <div className={"w-10 h-10 filter-invert"}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 1129.16 1333.33'
                shape-rendering='geometricPrecision'
                text-rendering='geometricPrecision'
                image-rendering='optimizeQuality'
                fill-rule='evenodd'
                clip-rule='evenodd'
              >
                <path
                  d='M638.91 399.93v759.5l-74.69 45.65-74.75-45.89V400.52L295.93 519.68v649.51l268.28 164.15 270.55-165.32V519.27L638.89 399.94zM564.22 0L0 341.84v649.59l146.54 86.33V428.11l417.8-254.04 418.19 253.67 1.72.98-.19 648.07 145.1-85.36V341.84L564.23 0z'
                  fill='#f26322'
                  fill-rule='nonzero'
                />
              </svg>
            </div>
            <div className={"w-12 h-12 filter-invert"}>
              <svg
                viewBox='0 0 512 512'
                xmlns='http://www.w3.org/2000/svg'
                fill-rule='evenodd'
                clip-rule='evenodd'
                stroke-linejoin='round'
                stroke-miterlimit='2'
              >
                <g transform='translate(.722 .64) scale(6.375)'>
                  <circle cx='40' cy='40' r='40' />
                  <path
                    d='M66.448 70.009L30.73 24H24v31.987h5.384v-25.15l32.838 42.427a40.116 40.116 0 004.226-3.255z'
                    fill='url(#prefix___Linear1)'
                    fill-rule='nonzero'
                  />
                  <path
                    fill='url(#prefix___Linear2)'
                    d='M51.111 24h5.333v32h-5.333z'
                  />
                </g>
                <defs>
                  <linearGradient
                    id='prefix___Linear1'
                    x1='0'
                    y1='0'
                    x2='1'
                    y2='0'
                    gradientUnits='userSpaceOnUse'
                    gradientTransform='rotate(51.103 -29.93 76.555) scale(25.1269)'
                  >
                    <stop offset='0' stop-color='#fff' />
                    <stop offset='1' stop-color='#fff' stop-opacity='0' />
                  </linearGradient>
                  <linearGradient
                    id='prefix___Linear2'
                    x1='0'
                    y1='0'
                    x2='1'
                    y2='0'
                    gradientUnits='userSpaceOnUse'
                    gradientTransform='rotate(90.218 14.934 38.787) scale(23.50017)'
                  >
                    <stop offset='0' stop-color='#fff' />
                    <stop offset='1' stop-color='#fff' stop-opacity='0' />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className={"filter-invert"}>
              <Image
                src={"/docker-icon.svg"}
                alt={"docker-icon"}
                width={45}
                height={45}
              />
            </div>
            <div className={"filter-invert"}>
              <Image
                src={"/python.svg"}
                alt={"python"}
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
