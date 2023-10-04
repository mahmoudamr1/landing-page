import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Barbie',
  description: 'fashion Clothes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
       
        <link rel="icon" href="/main-icon1.png" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
