'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Define parts with their colors
const segments = [
  { text: 'FINAL ROUND — “CONFRONT THE FRONT MAN”\n', color: 'text-yellow-400' },
  { text: 'Binary: ', color: 'text-green-400' },
  { text: '0xilnam001', color: 'text-pink-400' },
  { text: ' in ????()\n', color: 'text-green-400' },
  { text: 'Type: ', color: 'text-green-400' },
  { text: 'System Exploitation\n', color: 'text-red-400' },
  { text: 'Difficulty: Medium\n', color: 'text-red-500' },
  { text: 'Access: Remote (ask the recruiters for creds)\n\n', color: 'text-green-400' },
  { text: 'THE GAME FILTERS, NOT RECRUITS.\n', color: 'text-yellow-300' },
  { text: 'You are not welcomed. You are not wanted.\n', color: 'text-white' },
  { text: 'You made it here because the system failed to stop you.\n', color: 'text-white' },
  { text: 'Now, the Front Man wants to see why.\n\n', color: 'text-white' },
  { text: 'Signal Source: UNKNOWN\n', color: 'text-cyan-400' },
  { text: 'A live SSH server has been found.\n', color: 'text-white' },
  { text: 'One open port.\n\n', color: 'text-pink-300' },
  { text: 'The system responds if and only if you scan correctly.', color: 'text-green-400' }
]

export default function RoundSix() {
  const [charIndex, setCharIndex] = useState(0)
  const totalChars = segments.reduce((sum, seg) => sum + seg.text.length, 0)

  useEffect(() => {
    if (charIndex < totalChars) {
      const timeout = setTimeout(() => setCharIndex(charIndex + 1), 8)
      return () => clearTimeout(timeout)
    }
  }, [charIndex, totalChars])

  // Build typed output dynamically
  let remaining = charIndex
  const renderedSegments = segments.map((seg, i) => {
    if (remaining <= 0) return null
    const toShow = seg.text.slice(0, Math.min(remaining, seg.text.length))
    remaining -= seg.text.length
    return (
      <span key={i} className={seg.color}>
        {toShow}
      </span>
    )
  })

  return (
    <div className='bg-black'>
    <main className="bg-black text-green-400 min-h-screen flex items-center justify-center px-6 font-mono mt-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl text-left space-y-6"
      >
        <pre className="whitespace-pre-wrap bg-black text-sm p-6 border border-green-700 rounded-md shadow-lg">
          {renderedSegments}
          {charIndex < totalChars && (
            <span className="inline-block ml-1 animate-pulse">_</span>
          )}
        </pre>

        <div className="bg-gray-900 border border-red-800 p-4 rounded">
          <h2 className="text-red-400 text-lg font-semibold mb-2">OBJECTIVE</h2>
          <p className="text-gray-300 leading-relaxed">
            Reach the SSH service, enumerate it safely, and find the binary/service
            that holds the flag. This is a controlled CTF target — exploit only in this environment.
          </p>
        </div>

        <div className="text-sm text-red-400 italic">
          <strong>Safety reminder:</strong> This round is for a controlled CTF environment. Do not attempt these techniques on systems of the campus. This will lead to straight disqualification***
        </div>

        <div className="flex gap-3 mt-3">
          <a
            href="https://ctfflags.upsurge2k25.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded"
          >
            → [ SUBMIT YOUR FLAG ]
          </a>

          <Link
            href="/"
            className="bg-transparent border border-green-700 text-green-300 px-5 py-2 rounded"
          >
            ← Back to Hub
          </Link>
        </div>

        <footer className="text-xs text-gray-600 mt-4 mb-10">
          Tip: For network hints, use service/version detection and slow, respectful timing. Example (CTF only): <code>ssh -sV --version-all &lt;host&gt;</code>
        </footer>
      </motion.div>
    </main>
    </div>
  )
}
