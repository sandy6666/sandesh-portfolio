import prisma from "@/util/db";

export async function POST(request: Request) {
    const requestData = await request.json();
    if(requestData?.id) {
        return new Response(JSON.stringify({
            message: "Blog rendered Successfully",
            blogs: await prisma.blogs.findUnique({
                where:{
                    url_key: requestData?.id
                }
            }),
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json', // Setting headers
            }
        });
    }
    const blogs = await prisma.blogs.findMany({
        skip: requestData.curPage * requestData.pageSize,
        take: requestData.pageSize,
    });
    return new Response(JSON.stringify({
        message: "Blog rendered Successfully",
        blogs: JSON.stringify(blogs),
    }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json', // Setting headers
        }
    });
}