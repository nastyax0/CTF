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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <h1 className="text-xl text-red-500 mt-15">🧩 ROUND 3 — “The Hunter Trace”</h1>
          <p><strong>Type:</strong> OSINT — Open Source Intelligence</p>
          <p><strong>Difficulty:</strong> 🟢 Easy</p>
          <p><strong>Skill Tested:</strong> Google Dorking </p>
        </motion.div>

        {/* Lore */}
        <div className="leading-relaxed text-left text-gray-400 text-sm mt-6 space-y-4">
          <p>
            You’ve been <span className="italic">tracking a ghost</span> — someone who once rebelled against the Game, 
            then vanished into the static.  
          </p>
          <p>
            They were a player once. <span className="italic">Just like you.</span><br />
            Now? They sit behind the mask.<br />
            Calling the shots. Pulling the strings.
          </p>
          <p>
            Their name was whispered in resistance circles:{" "}
            <span className="text-amber-300 font-bold">Player 132</span>.<br />
            Now they go by <span className="text-amber-300 font-bold">nastyax0</span>.
          </p>
        </div>

        {/* Spoiler Lore */}
        <div className="text-left leading-relaxed space-y-4">
          <strong className="text-red-500">📖 LORE REFERENCE:</strong>
          <div className="text-sm text-gray-400 mt-2 space-y-2">
            <p>
              Just like <span className="italic">The Front Man</span> — once a player, 
              now the architect of the system — nastyax0 staged their own disappearance.  
            </p>
            <p className="opacity-70 hover:opacity-100 transition-opacity duration-500">
              [ SPOILER ] 
              <span className="blur-sm hover:blur-none hover:text-white/70"> 
               They didn’t vanish. They built a <span className="italic">new identity</span> across the shadows of the internet.  
            </span> 
            </p>
            <p>
              The whispers say: they left behind breadcrumbs. Fragments of themselves.  
              Enough for those brave (or foolish) enough to hunt.  
            </p>
          </div>
        </div>

        {/* Objective */}
        <div className="text-left leading-relaxed space-y-4">
          <strong className="text-red-500">🎯 OBJECTIVE:</strong>
          <div className="text-sm text-gray-400 mt-2 space-y-2">
            <p>
              Find the trail of <span className="text-amber-300 font-bold">nastyax0</span> scattered across the web.
            </p>
            <p>
              A GitHub repo?<br />
              A tweet buried in 2017?<br />
              A hidden clue on a portfolio site?<br />
              Metadata inside a LinkedIn post?<br />
            </p>
            <p className="text-amber-300 font-bold">
              Somewhere, they signed their digital fingerprint.<br />
              One breadcrumb — one flag.
            </p>
          </div>
        </div>

        {/* Submit button */}
        <a
          href="https://ctfflags.upsurge2k25.tech/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-green-500/30 transition-all"
        >
          → [ SUBMIT YOUR FLAG ]
        </a>

        {/* Navigation */}
        <div className="mt-6 mb-10 text-pink-500 font-extralight">
          <Link href="/round-four">⏭ Proceed to Round Four</Link>
        </div>
      </motion.div>
    </main>
  )
}
