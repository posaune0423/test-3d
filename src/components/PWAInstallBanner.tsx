'use client'

import Image from 'next/image'
import { forwardRef, useCallback } from 'react'
import { APP_DESCRIPTION, APP_NAME } from '@/constants'
import { useA2HS } from '@/hooks/useA2HS'

type Props = {
  open: boolean
  height?: number
}

const PWAInstallBanner = ({ open, height }: Props) => {
  const { promptEvent, promptToInstall } = useA2HS()

  const isStandalone =
    typeof window !== 'undefined' && window.matchMedia('(display-mode: standalone)').matches

  const onInstallClick = useCallback(async () => {
    if (!promptEvent) {
      return
    }
    promptToInstall()
  }, [promptEvent, promptToInstall])

  if (isStandalone) return

  return (
    <>
      <div
        className={`bg-[#F2F2F2] px-2 py-3 ${open ? 'block' : 'hidden'} ${height && `h-[${height}px]`}`}
      >
        <div className='flex items-center gap-2'>
          <Image
            src='/icons/icon-512x512.png'
            width={42}
            height={42}
            alt='App Logo'
            className='rounded bg-white'
          />
          <div>
            <p className='text-md font-medium text-[#2c2c2c]'>{APP_NAME}</p>
            <p className='text-xs text-[#2c2c2c]'>{APP_DESCRIPTION}</p>
          </div>
          <button
            className='ml-auto max-w-fit rounded-3xl bg-white px-6 py-1 text-sm font-medium text-[#2c2c2c] hover:opacity-80'
            onClick={onInstallClick}
          >
            Install
          </button>
        </div>
      </div>
    </>
  )
}

export default forwardRef(PWAInstallBanner)
