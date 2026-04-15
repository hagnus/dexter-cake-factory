import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dexter Cake Factory',
  description: 'A small Next.js app for the Dexter Cake Factory'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="container">
          <header>
            <h1>Dexter Cake Factory</h1>
          </header>
          {children}
        </main>
      </body>
    </html>
  )
}
