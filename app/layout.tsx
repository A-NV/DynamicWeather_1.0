'use client'

import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/navbar'


const font = Nunito ({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: 'Weather',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar /> 
          <div>
          {children}
          </div>
      </body>
    </html>
  )
}
