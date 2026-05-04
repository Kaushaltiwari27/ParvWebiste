/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/contact-us.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about.html',
        destination: '/#about',
        permanent: true,
      },
      {
        source: '/services.html',
        destination: '/#services',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
