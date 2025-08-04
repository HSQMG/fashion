import type { NextConfig } from "next";

// const nextConfig: NextConfig = {

//   images: {

//     domains: ["www.personsoul.com"],
//   },
// };
const nextConfig: NextConfig = {
  output: "export", // Bật chế độ static export
  // Bạn có thể thêm các cấu hình khác ở đây nếu cần
  images: {
    domains: ["www.personsoul.com"],
  },
};
export default nextConfig;
