/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "source.unsplash.com",
      "fakestoreapi.com",
      "placeimg.com",
      "http://placeimg.com/640/480/business",
    ],
  },
};

module.exports = nextConfig;
