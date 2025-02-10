import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Seoul Commitment Tracker',
  description: 'Tracking the progress of voluntary commitments made at the 2023 AI Safety Summit in Seoul, South Korea',
  keywords: ['AI Safety', 'Seoul Summit', 'AI Companies', 'Commitments', 'Policy Tracking'],
  authors: [{ name: 'The Midas Project' }],
  openGraph: {
    title: 'Seoul Commitment Tracker',
    description: 'Tracking the progress of voluntary commitments made at the 2023 AI Safety Summit in Seoul, South Korea',
    url: 'https://www.seoul-tracker.org',
    siteName: 'Seoul Commitment Tracker',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Seoul Commitment Tracker Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seoul Commitment Tracker',
    description: 'Tracking the progress of voluntary commitments made at the 2023 AI Safety Summit in Seoul, South Korea',
    images: ['/twitter-image.png'],
    creator: '@midasproject',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-icon.png',
    },
  },
  manifest: '/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}