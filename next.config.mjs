/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
    remotePatterns: [new URL('https://static.tvmaze.com/uploads/images/**'),
      new URL('https://dummyimage.com/**')
    ],
  },
};

export default nextConfig;
