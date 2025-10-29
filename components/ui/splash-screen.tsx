"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [stage, setStage] = useState<"splash" | "transition" | "complete">(
    "splash"
  );

  useEffect(() => {
    // Phase 1: Affichage du splash avec barre de progression (2.5s)
    const splashTimer = setTimeout(() => {
      setStage("transition");
    }, 2500);

    // Phase 2: Transition rapide vers completion (3s total)
    const transitionTimer = setTimeout(() => {
      setStage("complete");
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(splashTimer);
      clearTimeout(transitionTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage !== "complete" && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut", delay: 0.5 },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
        >
          {/* Logo centré */}
          <motion.div
            initial={{
              scale: 1.2,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.3,
                ease: "easeInOut",
              },
            }}
            className="relative"
          >
            <Image
              src="/logo.webp"
              alt="Logo Ministère de l'Intérieur"
              width={300}
              height={300}
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Texte optionnel pendant le splash */}
          {stage === "splash" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.8,
                },
              }}
              className="absolute bottom-1/3 text-center"
            >
              <h1 className="text-2xl font-bold text-foreground mb-2">
                Ministère de l'Intérieur
              </h1>
              <p className="text-muted-foreground">République du Congo</p>
            </motion.div>
          )}

          {/* Indicateur de chargement */}
          {stage === "splash" && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: 1,
                transition: {
                  duration: 2.3,
                  ease: "easeInOut",
                  delay: 0.2,
                },
              }}
              className="absolute bottom-20 w-64 h-1 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 origin-left rounded-full"
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
