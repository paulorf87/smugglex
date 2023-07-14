import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/header/header'
import CustomProvider from './components/_provider/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'smugglEX Web Application',
  description: 'A NEXT.js web application for testing DevSecOps tools',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
          <Header />
          <CustomProvider>
            {children}
          </CustomProvider>
      </body>
    </html>
  )
}
