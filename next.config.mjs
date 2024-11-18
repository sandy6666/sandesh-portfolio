/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    images:{
        remotePatterns:[
            {
                hostname: 'media2.dev.to',
                protocol: 'https',
            }
        ]
    }
};

export default nextConfig;
