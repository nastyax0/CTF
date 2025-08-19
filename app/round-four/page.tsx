'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function RoundFour() {
  return (
    <main className="bg-black text-green-400 min-h-screen flex items-center justify-center px-6 font-mono">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-2xl text-center space-y-6"
      >
        <h1 className="text-xl text-red-500 mt-18">🎭 ROUND 4 — “Protocol: MASKED MEMORY”</h1>

        <p><strong>Type:</strong>Light Reverse Engineering / Logic</p>
        <p><strong>Theme:</strong>The code speaks; the output lies</p>
        <p><strong>Difficulty:</strong> 🟡 Easy-Medium</p>

        <p className="text-left leading-relaxed font-extralight text-red-600">
         “The Pink Soilder doesn’t just guard the door. He guards what you’re not supposed to know.”<br />
</p>
        <p className='text-left text-sm text-gray-400 mt-4'>
         You've breached a handler’s terminal inside the SIGNAL bunker.
         A single file remains: masked_echo.bat<br />
         You run it. Gibberish. Static. Lies.<br />
         But something feels off.<br />
         </p>
<p className='text-red-600'>
“They masked the memory… but memory leaks. So do secrets.”
You must not trust what it shows.
 You must read what it hides.<br/>
<span className='text-amber-400'>—Cho Sang-woo (Player 218)</span>
 </p>

        <p className="text-left leading-relaxed">
          The Frontman dropped some file near hallway, 
        <br />
        </p>

        <div className="bg-gray-900 border border-green-700 p-4 rounded">
          <a
            href="/masked.ps1"
            download
            className="text-white hover:underline"
          >
            📁 Download the file: <strong>masked.ps1</strong>
          </a>
        </div>

        <a
          href="https://yourctfd.com/challenges#Protocol-HUNTER-TRACE"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded"
        >
          → [ SUBMIT YOUR FLAG ]
        </a>
        <div className='mt-3.5 text-pink-500 font-extralight mb-6.5' >
          <Link href="/soilder-message">⏭ Proceed to Round-Five</Link>
        </div>
      </motion.div>
    </main>
  )
}
