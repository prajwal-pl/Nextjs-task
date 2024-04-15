import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Uniportal',
  description: 'University at Fingertips',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" /> 
      </Head>
      <body className={inter.className} style={{ overscrollBehavior: 'none' }}>
        {children}
      </body>
    </html>
  )
}
