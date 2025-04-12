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
                source: "/:path+",
                destination: "https://kairosapp.vercel.app/:path+"
            },
            {
                source: "/app/_next/:path+",
                destination:
                    "https://kairosapp.vercel.app/app/_next/:path+"
            }
        ];
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"], // Add @svgr/webpack to handle SVGs as React components
        });
        return config;
    }
};

export default nextConfig;