/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["d3tfanr7troppj.cloudfront.net", "cdn-icons-png.flaticon.com"],
  },
  output: "export",
  // Specify the base path for GitHub Pages
  basePath: "/sunny-rathaur-portfolio",
  assetPrefix: "/sunny-rathaur-portfolio",
};
export default nextConfig;
