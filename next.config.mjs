/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ['lh3.googleusercontent.com','firebasestorage.googleapis.com'] 
    }
};

export default nextConfig;


