/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/", // The path you want to redirect from
        destination: "https://content-locked.com/?63eb359", // The external domain or URL you want to redirect to
        permanent: true, // Set to `false` for temporary redirects
      },
    ];
  },
};

export default nextConfig;
