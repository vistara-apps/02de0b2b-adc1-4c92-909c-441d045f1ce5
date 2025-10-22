import type { Metadata } from 'next'
import { Providers } from './providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'TrendCaster - Spot & Grow with Crypto Trends',
  description: 'Spot, create, and grow with trending crypto narratives on Base.',
  openGraph: {
    title: 'TrendCaster',
    description: 'Spot, create, and grow with trending crypto narratives on Base.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
