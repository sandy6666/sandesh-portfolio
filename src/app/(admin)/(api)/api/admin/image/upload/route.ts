import { writeFile } from "fs/promises";
import path from "path";

function uploadImages(requestData: FormData): Promise<string[]> {
    return new Promise(async (resolve, reject) => {
        const uploadedImageUrls: string[] = [];

        try {
            for (const entry of requestData.entries()) {
                const data = entry[1] as FormData;
                const buffer = Buffer.from(await data?.arrayBuffer());
                const filename = data.name.replaceAll(" ", "_");
                console.log(filename);
                console.log(buffer, 'sandesh');
                const modifiedFilename = Math.floor(Math.random() * 100) + filename;
                await writeFile(
                    path.join(process.cwd(), "public/wysiwig/" + modifiedFilename),
                    buffer
                );
                uploadedImageUrls.push(`/wysiwig/${modifiedFilename}`);
                console.log("uploadedImageUrls", uploadedImageUrls);
            }

            resolve(uploadedImageUrls);
        } catch (error) {
            reject(error);
        }
    });
}


export async function POST(request: Request) {
    const requestData = await request.formData();

    const uploadedImageUrls = await uploadImages(requestData);

    return new Response(JSON.stringify({
        success: 1,
        file: {
            url: uploadedImageUrls[0],
        }
    }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        }
    });
}