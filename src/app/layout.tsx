import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { DarkModeProvider } from '@/components/darkModeProvider'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: "Moa's Portfolio",
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DarkModeProvider>{children}</DarkModeProvider>
      </body>
    </html>
  )
}
