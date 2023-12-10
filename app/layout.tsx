import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'TWG  Criminal Law',
  description: 'Tristan Gillespie, a proven battle-tested Plaintiffs litigator with 17 years of courtroom experience and thrives on holding large corporations accountable to consumers.',
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
