import prisma from "@/util/db";
import bcrypt from "bcryptjs";
import {sign} from 'jsonwebtoken';

export async function POST(request: Request) {
    const requestData = await request.json();
    const user = await prisma.users.findUnique({
        where: {
            username: requestData.username,
        },
    });

    if(!user) {
        return new Response(JSON.stringify({
            message: "User not found"
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json', // Setting headers
            }
        });
    }

    const isPasswordMatch = await bcrypt.compareSync(requestData.password, user.password);
    if(!isPasswordMatch) {
        return new Response(JSON.stringify({
            message: "Invalid Credentials"
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }

    const token = await sign({
        id: user.id,
        email: user.email,
    }, process.env.JWT_SECRET);


    return new Response(JSON.stringify({
        message: "Logged In Successfully",
        token: token
    }), {
        status: 200,
        headers: {
            'Set-Cookie': `auth_token=${token}; Path=/; HttpOnly; Secure; SameSite=Lax`,
            'Content-Type': 'application/json',
        }
    });
}