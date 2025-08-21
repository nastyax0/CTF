'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const terminalLines = [
  'The air is thick. A terminal blinks to life.',
  'A red mask appears once more.',
  'RED MASK:',
  '“You have been selected. But selection is not survival.”',
  '“Others came before you: Player 456 was one of them. You are Player 456 too.”',
]

export default function RoundZero() {
  const [typedLines, setTypedLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState('')
  const [lineIndex, setLineIndex] = useState(0)

  useEffect(() => {
    if (lineIndex < terminalLines.length) {
      let charIndex = 0
      const interval = setInterval(() => {
        setCurrentLine((prev) => prev + terminalLines[lineIndex][charIndex])
        charIndex++
        if (charIndex === terminalLines[lineIndex].length) {
          clearInterval(interval)
          setTimeout(() => {
            setTypedLines((prev) => [...prev, terminalLines[lineIndex]])
            setCurrentLine('')
            setLineIndex((prev) => prev + 1)
          }, 100)
        }
      }, 20) // fast typing speed
      return () => clearInterval(interval)
    }
  }, [lineIndex])

  return (
    <main className="bg-black text-green-400 min-h-screen flex flex-col justify-center items-center px-6 font-mono">
      <div className="max-w-2xl w-full">
        <div className="text-left text-lg leading-relaxed">
          {typedLines.map((line, i) => (
            <p key={i} className="mb-1">
              {line}
            </p>
          ))}
          {currentLine && (
            <p className="mb-1">
              {currentLine}
              <span className="animate-pulse">_</span>
            </p>
          )}
        </div>

        {lineIndex === terminalLines.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 space-y-4"
          >
            <p className="italic text-yellow-300">
              🧠 HINT:<br />
              “Websites are made of HTML. Look at the raw structure.”<br />
              — Round 0 survivor (status: unknown)
            </p>

            <div className="pt-4 flex flex-col gap-4">
              <Link
                href="/page.html"
                className="bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded text-center"
              >
                → [ INSPECT THE PROTOCOL ]
              </Link>

              <a
                href="https://ctfflags.upsurge2k25.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded text-center"
              >
                → [ SUBMIT YOUR FLAG ]
              </a>
              <div className='mt-3.5 text-pink-500 font-extralight' ><Link href="/round-one">⏭ Proceed to Round-One</Link></div>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  )
}
