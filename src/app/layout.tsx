import './globals.css'
import type { Metadata } from 'next' // import the type for your app metadata
import { Inter } from 'next/font/google' // import the font for your next app
import Provider from '../../provider/provider' // import the Provider used to wrap your app 

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = { // here you define the metadata for your App 
  title: 'Github Authentication with next',
  description: 'Understandng the Simplicity of github authentication',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Provider>
         {children}
        </Provider>
    </body>
    </html>
  )
}