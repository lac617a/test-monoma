import { Metadata } from 'next'
import { APP_NAME, AUTHOR_URI, CANONICAL, DESCRIPTION } from '@/constants'

const METADATA: Metadata = {
  title: APP_NAME,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true },
  viewport: { width: 'device-width', initialScale: 1 },
  authors: [{ name: 'Dominyel Rivera', url: AUTHOR_URI }],
  keywords: [
    'Monoma',
    'Comunidad',
    'digitales',
    'tecnología',
    'soluciones',
    'profesionales'
  ],
  twitter: {
    title: APP_NAME,
    images: CANONICAL,
    description: DESCRIPTION,
    card: 'summary_large_image'
  },
  openGraph: {
    type: 'website',
    url: CANONICAL,
    title: APP_NAME,
    images: CANONICAL,
    siteName: APP_NAME,
    description: DESCRIPTION
  }
}

export default METADATA
