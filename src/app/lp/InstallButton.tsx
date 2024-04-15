'use client'

import { useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { useA2HS } from '@/hooks/useA2HS'

const InstallButton = () => {
  const { promptEvent, promptToInstall } = useA2HS()

  const onInstallClick = useCallback(async () => {
    if (!promptEvent) {
      return
    }
    promptToInstall()
  }, [promptEvent, promptToInstall])

  return (
    <Button
      onClick={onInstallClick}
      className='bg-gradient-to-r from-blue-400 to-blue-700 px-6'
    >
      Install
    </Button>
  )
}

export default InstallButton
