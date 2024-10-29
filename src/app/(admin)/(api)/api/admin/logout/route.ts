
export async function POST(request: Request) {

    const authToken = request.cookies.get('auth_token');


    return new Response(JSON.stringify({
        message: "Logged Out Successfully",
    }), {
        status: 200,
        headers: {
            'Set-Cookie': `auth_token=; Path=/; HttpOnly; Secure; SameSite=Lax`,
            'Content-Type': 'application/json',
        }
    });
}