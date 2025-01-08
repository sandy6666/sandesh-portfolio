import Image from "next/image";
import SocialShare from "@/components/SocialShare";
import {CalendarClock, Eye, User} from "lucide-react";


export async function getBlog(url_key: string) {
    // Fetch data from an external API or database based on the slug parameter
    const response = await fetch(`${process.env.NEXT_SERVER_URL}api/admin/blogs`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            pageSize: 1,
            curPage: 1,
            id: url_key,
        }),
    });
    const result = await response.json();

    // Pass the data to the page component as props
    return result?.blog;
}

const Blog = async ({params}: { params: any }) => {
    const slug = params.slug;
    const blog = await getBlog(slug)
    const formattedDate = new Intl.DateTimeFormat("en-US", {
        dateStyle: "long",
        timeZone: "UTC",
    }).format(new Date(blog?.dev_to_data?.published_at));

    console.log(blog)
    return (
        <section className={'min-h-screen bg-[#1F1F24] pt-[130px] flex flex-col gap-8 px-10 text-white'}>
            <div className={'tags flex justify-center gap-3'}>
                {blog?.dev_to_data?.tag_list?.map((tag: any) => <div key={tag}
                                                                     className={'tag gradient-primary min-w-[145px] h-[48px] flex justify-center items-center rounded-2xl'}>{tag}</div>)}
            </div>
            <div className={'title'}>
                <h1 className={'text-center text-6xl font-bold'}>{blog.title}</h1>
            </div>
            <div className={'subtitle'}></div>
            <div className={'blog-image flex justify-center'}>
                <Image
                    src={blog?.dev_to_data?.cover_image}
                    alt="UI/UX Trends"
                    layout="fill"
                    objectFit="cover"
                    className="max-w-[1320px] max-h-[765px] !relative"
                />
            </div>
            <div className={'content w-full flex flex-col gap-10 lg:gap:0 lg:flex-row lg:px-32'}>
                <div className={'blog-data lg:w-2/3'}>
                    {blog?.dev_to_data?.description}
                </div>
                <div className="lg:w-1/3 flex flex-col gap-4 text-white p-6 rounded-md shadow-md">
                    <div
                        className={'disappearing-border-top-to-bottom w-[214px] h-[202px] border-[1px] border-gray-500 rounded-2xl flex justify-center items-center'}>
                        <div className="flex flex-col text-sm gap-4">
                            <div className={'flex gap-2'}>
                                <CalendarClock className="w-4 h-4 cursor-pointer hover:text-blue-500"/>
                                <p>{formattedDate}</p>
                            </div>
                            <div className={'flex gap-2'}>
                                <User className="w-4 h-4 cursor-pointer hover:text-blue-400"/>
                                <p>By <span className={'font-bold'}>{blog?.dev_to_data?.user?.name} </span></p>
                            </div>
                            <div className={'flex gap-2'}>
                                <Eye className="w-4 h-4 cursor-pointer hover:text-blue-400"/>
                                <p>Views: <span className={'font-bold'}>{blog?.dev_to_data?.page_views_count} </span></p>
                            </div>
                        </div>
                    </div>

                    {/* Social share icons */}
                    <div
                        className={'disappearing-border-top-to-bottom w-[214px] h-[202px] border-[1px] border-gray-500 rounded-2xl flex flex-col justify-center items-center'}>
                        <p className="text-gray-400 mb-2">Share</p>
                        <div className="flex space-x-4">
                            <SocialShare />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;