'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
export default function EchoImage() {
  return (
    <main className="bg-black text-green-400 min-h-screen flex items-center justify-center px-6 font-mono">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-2xl text-center space-y-6"
      >
        <h1 className="text-xl text-red-500 mt-18">🖼️ ROUND 2 — “Protocol: ECHO IMAGE”</h1>

        <p><strong>Type:</strong> Forensics — Image Steganography</p>
        <p><strong>Theme:</strong> Seeing What’s Hidden</p>
        <p><strong>Difficulty:</strong> 🟡 Medium</p>

        <p className=" leading-relaxed text-left text-sm text-gray-400 mt-4">
          The terminal buzzes again. This time, it doesn’t show code — but a still image,<br />
          broadcasted as part of a “routine check”.<br /><br />
          A black-and-white photograph appears: grainy, oddly composed.<br />
          There's a symbol etched faintly in a corner… a triangle, a circle, and a square.<br />
          You’ve seen this before: in the dorms, on the masks, where the Glass Bridge cracked.<br /><br />

          A voice returns — muffled, synthetic, unfeeling:<br />
          <span className="text-red-400">“This image is a message. But not for your eyes.”</span><br />
          <span className="text-red-400">“Echoes do not shout. They embed.”</span><br /><br />

          A fellow player slipped you a <Link className='hover:underline text-pink-500' href={"https://www.pelock.com/products/steganography-online-codec"}>tool
          </Link>.<br />
        </p>

        {/* 🔍 IMAGE CHALLENGE DOWNLOAD */}
        <div className="bg-gray-900 border border-green-700 p-4 rounded">
          <a
            href="/echo.png"
            download
            className="text-white hover:underline"
          >
            🖼️ Download the image file: <strong>echo.png</strong>
          </a>
        </div>

        <p className="italic text-yellow-300">
          🧠 “Not all data is visible. Some whispers hide in pixels.”<br />
          — Player 067
        </p>

        <a
          href="https://ctfflags.upsurge2k25.tech/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded"
        >
          → [ SUBMIT YOUR FLAG ]
        </a>
        <div className='mt-3.5 text-pink-500 font-extralight mb-6.5' ><Link href="/round-three">⏭ Proceed to Round-Three</Link></div>
      </motion.div>
    </main>
  )
}

