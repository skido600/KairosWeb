import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "kairosapp.vercel.app",
                pathname: "/**"
            }
        ]
    },
    async rewrites() {
        return [
            {
                source: "/home",
                destination: "https://kairosapp.vercel.app"
            },
            {
                // Catch-all route for any other blog paths
                source: "/:path+",
                destination: "https://kairosapp.vercel.app/:path+"
            },
            {
                source: "/app/_next/:path+",
                destination:
                    "https://kairosapp.vercel.app/app/_next/:path+"
            }
        ];
    }
};

export default nextConfig;
