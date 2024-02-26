module.exports = {
  async headers() {
    return [
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400', 
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600', 
          },
        ],
      },
    ];
  },
  images: {
    domains: ['static.wixstatic.com'],
  },
};
