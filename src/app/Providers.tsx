'use client'

import { Analytics } from '@vercel/analytics/react'
import { useRouter } from 'next/navigation'
import { Suspense, useEffect } from 'react'
import Footer from '@/components/Footer'
import GlobalFooter from '@/components/GlobalFooter'
import Header from '@/components/Header'

const Providers = ({ children }: { children: React.ReactNode }) => {
  // const isStandalone = useMemo(
  //   () => typeof window !== 'undefined' && window.matchMedia('(display-mode: standalone)').matches,
  //   [],
  // )
  const isStandalone = true

  const router = useRouter()

  useEffect(() => {
    if (!isStandalone) {
      router.push('/lp')
    } else {
      router.push('/')
    }
  }, [isStandalone, router])

  return (
    <Suspense>
      {isStandalone || <Header />}
      <Analytics />
      {children}
      {isStandalone ? <GlobalFooter /> : <Footer />}
    </Suspense>
  )
}

export default Providers
