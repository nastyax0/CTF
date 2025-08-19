'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [accepted, setAccepted] = useState(false)
  const [typedText, setTypedText] = useState('')
  const router = useRouter()

  const fullText =
    `You wake to find a black envelope by your side. No stamp. No sender. Inside: a folded note.\n\n“You have been observed. If you seek freedom from your debts — reply: ‘I ACCEPT.’”`

  // Typing effect
  useEffect(() => {
    if (!accepted) {
      let index = 0
      const interval = setInterval(() => {
        setTypedText(fullText.slice(0, index))
        index++
        if (index > fullText.length) clearInterval(interval)
      }, 25)
      return () => clearInterval(interval)
    } else {
      // After 1.5s redirect to /round-zero
      const timeout = setTimeout(() => {
        router.push('/intro')
      }, 1500)
      return () => clearTimeout(timeout)
    }
  }, [accepted])

  return (
    <main className="bg-black text-green-400 min-h-screen flex items-center justify-center px-4 font-mono">
      {!accepted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-2xl text-left space-y-6"
        >
          <h1 className="text-xl text-red-600 tracking-widest mb-4">📜 BLACK ENVELOPE RECEIVED</h1>
          <pre className="whitespace-pre-wrap text-lg leading-relaxed">{typedText}_</pre>
          <button
            onClick={() => setAccepted(true)}
            className="mt-4 bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition-all shadow-md"
          >
            [ I ACCEPT ]
          </button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-red-500 text-xl animate-pulse"
        >
          📺 Connecting to SIGNAL...
        </motion.div>
      )}
    </main>
  )
}
