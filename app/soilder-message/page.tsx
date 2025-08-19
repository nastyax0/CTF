'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function NoiseLayerIntro() {
  return (
    <main className="bg-black min-h-screen flex flex-col items-center justify-center px-6 font-mono">
      {/* Fade in image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-8"
      >
        <Image
          src="/image.png" // replace with your actual image path
          alt="Noise Layer Transmission"
          width={300}
          height={400}
          className="rounded border border-red-600"
        />
      </motion.div>

      {/* Button to go to Round 5 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <Link
          href="/round-five"
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded"
        >
          → Enter Protocol: NOISELAYER
        </Link>
      </motion.div>
    </main>
  )
}
