'use client'
import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import { PropsWithChildren } from 'react'
import { usePathname } from 'next/navigation'
import { ToastContainer } from 'react-toastify'

// UTILS
import METADATA from '@/config/metadata'
import CONFIG_TOAST from '@/config/toast'
import LayoutHeader from '@/layouts/Header'

// PROVIDERS
import { AuthProvider, PokemonProvider } from '@/context'

const inter = Jost({ subsets: ['latin'] })

export const metadata: Metadata = METADATA

export default function RootLayout({ children }: PropsWithChildren) {
  const pathname = usePathname()
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthProvider>
          {!pathname.includes('auth') && <LayoutHeader />}
          <PokemonProvider>
            {children}
          </PokemonProvider>
        </AuthProvider>
        <ToastContainer {...CONFIG_TOAST} />
      </body>
    </html>
  )
}
