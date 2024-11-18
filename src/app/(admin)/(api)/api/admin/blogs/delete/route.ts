import prisma from "@/util/db";

export async function DELETE(request: Request) {
    const { url_key } = await request.json();

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

    try {
        await prisma.blogs.delete({
            where: { url_key },
        });

        return new Response(JSON.stringify({
            message: "Blog deleted successfully",
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            }
        });
    } catch (error: any) {
        return new Response(JSON.stringify({
            message: "Error deleting blog. It may not exist.",
            error: error.message,
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
}
