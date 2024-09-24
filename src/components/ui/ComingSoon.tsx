'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function ComingSoon() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="my-28 flex flex-col items-center justify-center p-4 text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl leading-normal text-transparent bg-clip-text bg-custom-gradient tracking-tight text-center font-semibold">Coming Soon!</h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl font-light my-8"
        >
          Nerds at work: Please stand by for awesomeness!
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
       <span className='text-8xl'>🚀</span>
      </motion.div>
    </div>
  )
}