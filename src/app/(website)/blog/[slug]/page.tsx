import type {InferGetServerSidePropsType, GetServerSideProps} from 'next'
import Image from "next/image";

export async function getBlog(url_key: string) {
    // Fetch data from an external API or database based on the slug parameter
    const response = await fetch('http://localhost:3000/api/admin/blogs', {
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
            <div className={'content w-full px-32'}>
                <div className={'blog-data w-2/3'}>
                    {blog?.dev_to_data?.description}
                </div>
            </div>
        </section>
    );
};

export default Blog;