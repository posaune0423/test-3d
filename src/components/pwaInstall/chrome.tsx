'use client'

import { MoreVertical, X } from 'lucide-react'
import Image from 'next/image'
import { type IBeforeInstallPromptEvent } from '@/hooks/useA2HS'
import './styles-chrome.scss'

type Props = {
  deferredPrompt: IBeforeInstallPromptEvent | null
  handleInstallClick: () => void
  handleCloseClick: () => void
}

const ChromeInstallDialog = ({ deferredPrompt, handleInstallClick, handleCloseClick }: Props) => {
  if (deferredPrompt) {
    return (
      <aside id='pwa-install-element'>
        <div className='install-dialog w-full rounded-t-xl p-4'>
          <div className='chrome available flex w-full items-center justify-between'>
            <div className='flex'>
              <Image alt='icon' src='/assets/images/icon512_maskable.png' width={45} height={45} />
              <div>
                <p className='font-medium text-[#212121]'>Unikura</p>
                <p className='text-xs text-[#212121] opacity-70'>app.unikura.xyz</p>
              </div>
            </div>
            <button className='material-button primary install' onClick={handleInstallClick}>
              Install
            </button>
          </div>
        </div>
      </aside>
    )
  } else {
    return (
      <aside id='pwa-install-element' className='relative'>
        <X size={14} className='absolute right-2 top-3' onClick={handleCloseClick} />
        <div className='install-dialog w-full rounded-t-xl p-4'>
          <div className='chrome available flex w-full items-center justify-between'>
            <div className='flex'>
              <Image alt='icon' src='/assets/images/icon512_maskable.png' width={45} height={45} />
              <div>
                <p className='font-medium text-[#212121]'>Unikura</p>
                <p className='text-xs text-[#212121] opacity-70'>app.unikura.xyz</p>
              </div>
            </div>
          </div>
          <div className='mt-2 px-2'>
            <ul className='space-y-1'>
              <li className='text-sm text-[#212121]'>
                1. Tap <MoreVertical size={14} strokeWidth={3} className='inline' /> in your browser
              </li>
              <li className='text-sm text-[#212121]'>
                2. Click <span className='font-medium'> Install app</span> in the menu
              </li>
            </ul>
          </div>
        </div>
      </aside>
    )
  }
}

export default ChromeInstallDialog
