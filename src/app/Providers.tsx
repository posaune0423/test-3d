'use client'

import { Analytics } from '@vercel/analytics/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Footer from '@/components/Footer'
import GlobalFooter from '@/components/GlobalFooter'
import Header from '@/components/Header'
import { isStandalone } from '@/lib/utils'

const Providers = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()

  useEffect(() => {
    if (!isStandalone) {
      router.push('/lp')
    }
  })

  return (
    <>
      {isStandalone || <Header />}
      <Analytics />
      {children}
      {isStandalone ? <GlobalFooter /> : <Footer />}
    </>
  )
}

export default Providers
