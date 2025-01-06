import React from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation'

const BlogCard = ({ title, date, shortDesc, image, url }:{title: string, date: string, shortDesc: string, image: string, url: string}) => {
    const router = useRouter()

    const openBlogPage = () => {
        router.push(`/blog/${url}`);
    }
    return (
        <div onClick={openBlogPage} className="max-w-sm mx-auto p-4 bg-gray-900 rounded-lg text-white shadow-md hover:shadow-lg w-[500px] h-[400px] border border-gray-600 hover:border-[#6e4ef2] cursor-pointer">
            <div className="relative w-full h-64"> {/* Width is 100%, Height set to 256px */}
                <Image
                    src={image} // Replace with the path to your normal image
                    alt="UI/UX Trends"
                    layout="fill"
                    objectFit="cover"
                    className="w-full rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
                <div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"
                >
                    <Image
                        src={image} // Replace with the path to your hover image
                        alt="UI/UX Trends Hover"
                        layout="fill"
                        objectFit="cover"
                        className="w-full rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-purple-600 p-2 rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-5 h-5 text-white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 text-center">
                <p className="text-gray-400 text-sm">{new Date(date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}</p>
                <h3 className="mt-1 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-gray-300 text-sm">
                    {shortDesc}
                </p>
            </div>
        </div>
    );
};

export default BlogCard;
