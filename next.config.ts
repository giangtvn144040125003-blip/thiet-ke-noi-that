import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  turbopack: {
    root: process.cwd(),
  },
  images: {
    qualities: [75, 90, 100],
  },
  async redirects() {
    return [
      { source: "/dich-vu/thiet-ke-2d-3d", destination: "/thiet-ke-quan-net", permanent: true },
      { source: "/dich-vu/lap-dat-phong-may", destination: "/thi-cong-setup-quan-net", permanent: true },
      { source: "/dich-vu/tu-van-dau-tu", destination: "/tu-van-mo-quan-net", permanent: true },
      { source: "/dich-vu/nang-cap-cai-tao-quan-net", destination: "/nang-cap-cai-tao-quan-net", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;


