'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const flickerLines = [
  'czI1N1ByT',
'$#@TWF5IHRoZSB3aG',
'%DF0IGJlc3Qg',
'bGlnaHQgYmUgdGhlIG',
'NhbGwgd2hlbiB0aGU',
'1dGltZSBjb21lc',
'VGhlIGdhbWUgaXMgbm',
'90IHdoYXQsgdGhlIHJvb3R9',
'5nYgb2YgZmly'
]

export default function RoundOne() {
  const [index, setIndex] = useState(0)

  // Flickering loop effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % flickerLines.length)
    }, 1200)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="bg-black text-green-400 min-h-screen flex flex-col items-center justify-center font-mono px-6">
      <div className="max-w-2xl text-center space-y-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <h1 className="text-xl text-red-500">🧩 ROUND 1 — “The Voice Below”</h1>
          <p><strong>Type:</strong> Web — Base64 Decoding</p>
          <p><strong>Difficulty:</strong> 🟢 Easy</p>
          <p><strong>Skill Tested:</strong> Recognizing and decoding encoded text</p>
        </motion.div>

        <div className="mt-6 bg-black border border-green-500 px-6 py-4 text-lg text-white shadow-lg tracking-wide leading-relaxed">
          <p className="text-gray-400 mb-2">[ Terminal Rebooting... Static Detected ⚠️ ]</p>
          <p className="text-white text-xl animate-pulse">
            {flickerLines[index]}
          </p>
        </div>

        <div className="text-left text-sm text-gray-400 mt-4">
          <p>
            The RED MASK returns — but he doesn’t speak.<br />
            Instead, a recorded tape begins to play, barely audible:
          </p>
          <p className="italic text-yellow-300 mt-2">
            “Others heard this too… None returned.”
          </p>
          <p className="mt-2">
            As the static grows louder, you feel it’s not just noise.<br />
            It’s a message buried beneath noise — like a trapdoor in a room with no doors.
          </p>

          <p className='mt-2'>
            “Player 067... she tried to reassemble it. Said the noise had a pattern.”<br/>
“He left you the fragments. Can you decode the message he died trying to send?”
          </p>
                    <p className="italic font-bold text-2xl text-red-800 mt-2 wrap-break-word">
           VGhlIGdhbWUgaXMgbm90IHdoYXQgaXQgc2VlbXMgdG8gYmUuCQpzaWduYWx7c2Vla190aGVfcm9vdF9pbl92b2ljZV9iZWxvd30=
          </p>
        </div>

        <div className="pt-6">
          <a
            href="https://yourctfd.com/challenges#The-Voice-Below"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded text-center"
          >
            → [ SUBMIT YOUR FLAG ]
          </a>
        </div>
        <div className='mt-3.5 text-pink-500 font-extralight' ><Link href="/round-two">⏭ Proceed to Round-Two</Link></div>
      </div>
    </main>
  )
}
