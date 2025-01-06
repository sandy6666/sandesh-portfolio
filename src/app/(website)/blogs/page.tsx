'use client';
import BlogCard from "@/components/generic/BlogCard";
import { useEffect, useState } from "react";

const Page = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData(10, 0);
    }, []);

    const fetchData = async (pageSize: number, curPage: number) => {
        const response = await fetch('/api/admin/blogs', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ pageSize, curPage }),
        });
        const result = await response.json();
        setData(result.blogs);
    };

    // @ts-ignore
    return (
        <div className="bg-[#272730] flex flex-col gap-10 min-h-[77.3vh] text-[#6e4ef2] py-10 lg:py-20 px-10">
            <h1 className="text-4xl lg:text-6xl text-center">Recent Blogs</h1>
            <div className="flex flex-wrap justify-center gap-10 lg:px-32">
                {data.map((blog, index) => (
                    <BlogCard
                        key={index}
                        title={blog.title}
                        date={blog.dev_to_data.published_at}
                        shortDesc={blog.shortDesc}
                        image={blog.dev_to_data.cover_image} // Assuming each blog has an image URL
                        url={blog.url_key}
                    />
                ))}
            </div>
        </div>
    );
};

export default Page;
