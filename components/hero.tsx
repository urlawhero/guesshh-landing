"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  
  // Track scroll progress within the Hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Map the scroll progress to a rotation angle.
  // When at the top (0), it's tilted at -6 degrees.
  // As you scroll down (to 0.4), it straightens to 0 degrees.
  const rotate = useTransform(scrollYProgress, [0, 0.4], [-6, 0])
  // We also add a slight parallax effect moving it up slightly
  const y = useTransform(scrollYProgress, [0, 0.5], [20, -20])

  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 bg-background"
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_40%,rgba(74,222,128,0.12)_0%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Text and CTAs */}
          <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <div className="inline-flex items-center rounded-full border border-[#4ade80]/30 bg-[#4ade80]/10 px-3 py-1 text-sm text-[#4ade80] mb-6">
              <span className="flex h-2 w-2 rounded-full bg-[#4ade80] mr-2 animate-pulse"></span>
              Free to Play · No Account Needed
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-[1.1] mb-6">
              Find the Spy. <br />
              <span className="text-[#4ade80]">Trust No One.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed">
              The ultimate multiplayer social deduction party game. Bluff, question, and outsmart your friends - no downloads, no accounts, just instant fun for up to 25 players.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="https://play.guesshh.com"
                className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full bg-[#4ade80] px-8 text-base font-bold text-[#050816] shadow-[0_0_28px_rgba(74,222,128,0.35)] transition-transform hover:scale-105"
              >
                Play Now - It's Free →
              </Link>
              <Link
                href="#how-it-works"
                className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 text-base font-medium text-white transition-colors hover:bg-white/10"
              >
                How It Works
              </Link>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                3-25 Players
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                Instant Setup
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Visual Mockup */}
          <div className="relative mx-auto w-full max-w-[320px] lg:max-w-[400px]">
            {/* Background decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#4ade80]/20 blur-[100px] rounded-full pointer-events-none" />
            
            {/* The Phone Mockup Animated Container */}
            <motion.div 
              style={{ rotate, y }}
              className="relative z-10 rounded-[2.5rem] border-8 border-slate-900 bg-slate-950 shadow-2xl overflow-hidden aspect-[9/19] hover:rotate-0 transition-transform duration-500"
            >
              {/* Notch */}
              <div className="absolute top-0 inset-x-0 h-6 bg-slate-900 rounded-b-2xl w-32 mx-auto z-20"></div>
              
              <Image 
                src="/screenshots/lobby.jpg" 
                alt="Guesshh Game Lobby" 
                fill 
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Floating Badges */}
            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, -40]) }}
              className="absolute -right-6 top-20 z-20 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transform rotate-[4deg]"
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#4ade80] animate-pulse"></span>
              <span className="text-white text-sm font-medium text-nowrap">8 Players Online</span>
            </motion.div>

            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, 40]) }}
              className="absolute -left-8 bottom-32 z-20 bg-red-500/10 backdrop-blur-md border border-red-500/30 px-4 py-2 rounded-2xl shadow-lg transform rotate-[-6deg]"
            >
              <span className="text-red-400 text-sm font-bold block">🕵️ Alert</span>
              <span className="text-white text-xs">You are the Spy!</span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
