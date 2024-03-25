/** @type {import('next').NextConfig} */
// next.config.mjs

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dspezvnhxinsedugybzy.supabase.co',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
