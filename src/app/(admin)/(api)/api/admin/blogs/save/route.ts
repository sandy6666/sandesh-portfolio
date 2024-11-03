import prisma from "@/util/db";

export async function POST(request: Request) {
    const requestData = await request.json();
    const { url_key, ...data } = requestData;

    if (!url_key) {
        return new Response(JSON.stringify({
            message: "url_key is required",
        }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }

    // Check if the entry exists
    const existingBlog = await prisma.blogs.findUnique({
        where: { url_key: url_key },
    });

    if (existingBlog) {
        // Update the existing entry
        await prisma.blogs.update({
            where: { url_key: url_key },
            data: data,
        });
        return new Response(JSON.stringify({
            message: "Blog updated successfully",
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            }
        });
    } else {
        // Create a new entry
        await prisma.blogs.create({
            data: { url_key, ...data },
        });
        return new Response(JSON.stringify({
            message: "Blog saved successfully",
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
}
