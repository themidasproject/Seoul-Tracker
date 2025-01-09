import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Seoul Commitment Tracker',
  description: 'Tracking the progress of voluntary commitments made at the 2023 AI Safety Summit in Seoul, South Korea',
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
