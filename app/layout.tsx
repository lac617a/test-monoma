import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import { PropsWithChildren } from 'react'
import { ToastContainer } from 'react-toastify'

// UTILS
import METADATA from '@/config/metadata'
import CONFIG_TOAST from '@/config/toast'

// PROVIDERS
import { AuthProvider } from '@/context'
import LayoutFooter from '@/layouts/Footer'

const inter = Jost({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800']
})

export const metadata: Metadata = METADATA

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
        <ToastContainer {...CONFIG_TOAST} />
        <LayoutFooter />
      </body>
    </html>
  )
}
