/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer')

const nextConfig = {
    compiler: {
        removeConsole: true,
    }, experimental: {
        serverActions: true,
      },
  
}

module.exports = withContentlayer({ ...nextConfig });