import Image from 'next/image'
import { APP_DESCRIPTION, APP_NAME } from '@/constants'

const PWABottomSheet = () => {
  return (
    <>
      <div className='touch-header' id='touch-header' />
      <div className='body-header'>
        <div className='icon'>
          <Image
            alt='icon'
            className='icon-image'
            draggable='false'
            src='/icons/icon-512x512.png'
            width={45}
            height={45}
          />
        </div>
        <div className='about'>
          <div className='name'>
            <label>{APP_NAME}</label>
          </div>
          <div className='hostname'>unikura.xyz</div>
        </div>
        <button className='material-button primary install'>Install</button>
      </div>
      <div className='description'>{APP_DESCRIPTION}</div>
    </>
  )
}

export default PWABottomSheet
