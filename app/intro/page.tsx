// app/round-zero/page.tsx
'use client'

import { motion } from 'framer-motion'

const lines = [
  "Welcome, contestant. You’ve entered Trials — the proving ground.",
  "Three trials await you. Pass, and you’ll earn a place in the Game.",
  "Fail… and your existence will be overwritten.",
  "Every Protocol you clear unlocks another layer. Reach the end, and the Front Man may grant your request.",
  "There is no help. No pause. Only progress.",
]

export default function RoundZero() {
  return (
    <main className="bg-black text-green-400 min-h-screen flex flex-col items-center justify-center font-mono px-4">
      <div className="text-center max-w-2xl space-y-4">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="mb-6"
        >
          <img
            src="/image(1).png"
            alt="Red Mask"
            className="w-24 mx-auto animate-pulse"
          />
        </motion.div>
        {lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 1.6 }}
            className="text-lg"
          >
            {line}
          </motion.p>
        ))}
        <motion.a
          href="/round-zero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: lines.length * 1.6 + 0.5 }}
          className="inline-block mt-8 bg-red-700 hover:bg-red-800 px-6 py-2 text-white rounded-xl"
        >
          🔻 [ BEGIN THE TRIALS ] 🔻
        </motion.a>
      </div>
    </main>
  )
}
