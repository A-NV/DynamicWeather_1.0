import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/navbar'
import NavFooter from './components/navbar/navFooter'

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
          <div className="pb-20 pt-28">
          {children}
          </div>
        <NavFooter />
      </body>
    </html>
  )
}
