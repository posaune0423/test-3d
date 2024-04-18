'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

const BorrowButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='w-full'>この本を借りる</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>この本を借りる</DialogTitle>
          <DialogDescription />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default BorrowButton
