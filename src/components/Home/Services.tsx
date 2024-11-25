"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Services = () => {

  const features = [
    {
      title: "Web & App Development",
      description:
          "Crafting visually appealing and user-friendly interfaces using HTML, CSS, JavaScript, and modern frameworks like React and Angular.",
      icon: "🖥️",
    },
    {
      title: "Database Management",
      description:
          "Designing and managing databases with SQL and NoSQL technologies such as MySQL, PostgreSQL, and MongoDB.",
      icon: "📚",
    },
    {
      title: "API Development",
      description:
          "Creating and integrating RESTful APIs to enable smooth communication between front-end and back-end systems.",
      icon: "☁️",
    },
    {
      title: "Performance Optimization",
      description:
          "Improving the speed and performance of web applications to provide a better user experience. Work with Node.js, Express.",
      icon: "🚀",
    },
    {
      title: "E-commerce Solutions",
      description:
          "Developing scalable and secure payment solutions for e-commerce platforms tailored to your business needs.",
      icon: "🛒",
    },
    {
      title: "Integrating AI",
      description:
          "Boost your applications with AI for improved efficiency, automation, and enhanced user experience.",
      icon: "🤖",
    },
  ];

  return (
      <section id={'services'} className='bg-[#272730] text-white w-full flex flex-col gap-6 justify-center items-center h-auto py-20'>
        <div className='flex flex-col gap-8'>
          <h3 className='text-white text-center font-bold text-6xl'>
            Services
          </h3>
          <p className='text-gray-300 text-center font-medium text-xl'>
            Designing solutions customized
            to meet your requirements
          </p>
        </div>
        <div className="text-white py-16 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
                <div
                    key={index}
                    className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
            ))}
          </div>
        </div>
        <div className='text-center'>
          <p className='text-gray-300 font-medium text-xl'>
            Excited to take on new projects and collaborate.
          </p>
          <p className='font-bold text-xl'>
            Let&apos;s chat about your ideas. <Link href={'#contact'} className={'text-[#6E4EF2]'}>Reach out!</Link>
          </p>
        </div>
      </section>
  );
};

export default Services;
