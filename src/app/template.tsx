'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { type ReactNode } from 'react'

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  slideInFromLeft: {
    x: '-10vw',
    opacity: 0,
  },
  slideInFromRight: {
    x: '10vw',
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
  },
}

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  if (pathname.startsWith('/lp')) {
    return children
  }

  return (
    <motion.div
      variants={variants}
      initial='slideInFromLeft'
      animate='center'
      exit='slideInFromRight'
      transition={{
        type: 'linear',
        duration: 0.1,
      }}
    >
      {children}
    </motion.div>
  )
}
