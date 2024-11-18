import prisma from "@/util/db";

export async function POST(request: Request) {
    const requestData = await request.json();

    // Check if a specific blog ID is requested
    if (requestData?.id) {
        const blog = await prisma.blogs.findUnique({
            where: {
                url_key: requestData?.id,
            }
        });

        if (blog) {
            // Fetch Dev.to API data for the specific blog
            const response = await fetch(`${process.env.NEXT_PUBLIC_DEVTOAPIBASEURL}articles/me`, {
                method: "GET",
                headers: {
                    'api-key': process.env.NEXT_PUBLIC_DEVTOAPIKEY!,
                }
            });

            if (response.ok) {
                const devToData = await response.json();
                // Find matching Dev.to data for the blog (assuming you have some identifier)
                const devToBlogData = devToData.find((item: any) => item.slug === blog.blog_id);

                // Merge the Dev.to data with the blog data
                // @ts-ignore
                blog.dev_to_data = devToBlogData;
            }
        }

        return new Response(JSON.stringify({
            message: "Blog rendered successfully",
            blog,
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }

    // If no specific ID is provided, fetch multiple blogs with pagination
    const blogs = await prisma.blogs.findMany({
        skip: requestData.curPage * requestData.pageSize,
        take: requestData.pageSize,
    });

    // Fetch Dev.to API data for multiple blogs
    const response = await fetch(`${process.env.NEXT_PUBLIC_DEVTOAPIBASEURL}articles/me`, {
        method: "GET",
        headers: {
            'api-key': process.env.NEXT_PUBLIC_DEVTOAPIKEY!,
        }
    });

    let devToData = [];
    if (response.ok) {
        devToData = await response.json();
    }
    console.log(devToData)

    // Merge Dev.to data with each blog entry
    const enrichedBlogs = blogs.map(blog => {
        const devToBlogData = devToData.find((item: any) => item.slug === blog.blog_id);
        return {
            ...blog,
            dev_to_data:devToBlogData || null,
        };
    });

    return new Response(JSON.stringify({
        message: "Blogs rendered successfully",
        blogs: enrichedBlogs,
    }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        }
    });
}
