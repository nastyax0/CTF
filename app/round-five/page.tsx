'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function RoundFive() {
  return (
    <main className="bg-black text-green-400 min-h-screen flex flex-col items-center justify-center px-6 font-mono">

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-2xl text-center space-y-6"
      >
        <h1 className="text-xl text-red-500 mt-18">
          ROUND 5 — “Protocol: NOISELAYER”
        </h1>

        <p><strong>Type:</strong> Multi-layer Encoding (CyberChef / Manual decode)</p>
        <p><strong>Theme:</strong> Stripping away distortion to reveal the truth</p>
        <p><strong>Difficulty:</strong> 🟠 Medium-Hard</p>

        <p className="text-left leading-relaxed">
          The Front Man transmits the final key, but his signal is buried beneath layers of distortion.<br />
          The terminal shows a trail of sanity stripped away — layer by layer.<br />
          Somewhere deep within, one clear voice remains: <span className="text-yellow-300">the flag</span>.
        </p>

        <p className="italic text-yellow-300">
          “Every mask has cracks. Every signal has silence in between the noise.”
        </p>

        {/* DOWNLOAD OR LINK TO CHALLENGE */}
        <div className="bg-gray-900 border border-green-700 p-4 rounded">
          <a
            href="/noise-layer.bin" // <-- replace with actual challenge file
            download
            className="text-white hover:underline"
          >
            🔊 Download the encoded file: <strong>noise-layer.bin</strong>
          </a>
        </div>

        <a
          href="https://yourctfd.com/challenges#Protocol-NOISELAYER"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded"
        >
          → [ SUBMIT YOUR FLAG ]
        </a>

        <div className="mt-3.5 text-pink-500 font-extralight mb-6.5">
          <Link href="/front-man">⏭ Proceed to Round-Six</Link>
        </div>
      </motion.div>
    </main>
  )
}
