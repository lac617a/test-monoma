import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

import utils from '@/utils'

export function useScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    utils.scrollTo()
    return () => utils.scrollTo()
  }, [pathname])

  return null
}
