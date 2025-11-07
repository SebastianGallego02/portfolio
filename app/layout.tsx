import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio Sebastian Gallego Loaiza',
  description: 'Portfolio inspirado en Hollow Knight',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.className} min-h-screen bg-[#0a0a0f] text-gray-100 overflow-hidden`}>
        {children}
      </body>
    </html>
  )
}

