import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nova Tech Africa',
    short_name: 'NovaTech',
    description: 'Premium software engineering and AI studio based in Nairobi.',
    start_url: '/',
    display: 'standalone',
    background_color: '#03000A',
    theme_color: '#00FFB2',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
