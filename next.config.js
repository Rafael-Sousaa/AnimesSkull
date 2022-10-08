/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  disable: process.env.NODE_ENV === 'development',
  dest: 'public',
  register: true,
  sw: '/sw.js'
})

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true
})
