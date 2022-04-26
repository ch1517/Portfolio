/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '/',
  },
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://ch1517.github.io/Portfolio"
      : "",
}