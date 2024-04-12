'use client'

import PWAInstallBanner from '@/components/PWAInstallBanner'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PWAInstallBanner open={true} />
      {children}
    </>
  )
}

export default Providers
