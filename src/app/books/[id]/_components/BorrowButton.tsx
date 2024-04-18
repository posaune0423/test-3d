'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { type Book } from '@/constants/mock'

const BorrowButton = ({ book }: { book: Book }) => {
  const [open, setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className='w-full'>この本を借りる</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>{book.title}</DialogTitle>
          <DialogDescription>{book.author}</DialogDescription>
        </DialogHeader>
        <DialogDescription>{book.author}</DialogDescription>
        <Button className='w-full' onClick={() => setOpen(false)}>
          {book.title}
        </Button>
      </DialogContent>
    </Dialog>
  )
}

export default BorrowButton
