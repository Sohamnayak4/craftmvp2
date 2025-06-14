import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CraftMVP - Transform Ideas into Products',
  description: 'We craft beautiful MVPs that validate your ideas and accelerate your startup journey. From landing pages to full applications in record time.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 