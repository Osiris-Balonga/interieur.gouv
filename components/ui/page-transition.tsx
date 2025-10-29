"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { SplashScreen } from "./splash-screen"

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const [showSplash, setShowSplash] = useState(false)
  const [hasVisitedHomePage, setHasVisitedHomePage] = useState(false)

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà visité la page d'accueil dans cette session
    const visitedHomePage = sessionStorage.getItem('visitedHomePage')

    if (isHomePage && !visitedHomePage) {
      // Première visite de la page d'accueil dans cette session
      setShowSplash(true)
      sessionStorage.setItem('visitedHomePage', 'true')
    } else {
      // Pas la page d'accueil ou déjà visitée
      setShowSplash(false)
      setHasVisitedHomePage(true)
    }
  }, [isHomePage])

  const handleSplashComplete = () => {
    setShowSplash(false)
    setHasVisitedHomePage(true)
  }

  return (
    <>
      {/* Animation de splash screen uniquement sur la page d'accueil et première visite */}
      {showSplash && isHomePage && (
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
          delay: showSplash ? 0 : 0.2
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