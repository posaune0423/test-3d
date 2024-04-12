/** @type {import('next').NextConfig} */
import withSerwistInit from '@serwist/next'

const pwaConfig = withSerwistInit({
  swSrc: 'src/app/sw.ts',
  swDest: 'public/sw.js',
  // disable: process.env.NODE_ENV === 'development',
})

const nextConfig = pwaConfig({})

export default nextConfig