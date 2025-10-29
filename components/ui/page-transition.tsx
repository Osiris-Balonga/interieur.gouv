"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { SplashScreen } from "./splash-screen"

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const [showSplash, setShowSplash] = useState(true)

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  return (
    <>
      {/* Animation de splash screen */}
      {showSplash && (
        <SplashScreen onComplete={handleSplashComplete} />
      )}

      {/* Contenu principal avec animation d'entrée */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: showSplash ? 0 : 1,
          y: showSplash ? 20 : 0
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: showSplash ? 0 : 0.8
        }}
        style={{
          visibility: showSplash ? "hidden" : "visible"
        }}
      >
        {children}
      </motion.div>
    </>
  )
}