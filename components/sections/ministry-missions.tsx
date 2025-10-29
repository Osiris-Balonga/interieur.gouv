"use client"

import React from 'react'
import Image from 'next/image'
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function MinistryMissions() {
  return (
    <section className="bg-background text-foreground py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-4">Le ministère et ses missions</h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu textuel */}
          <ScrollReveal delay={0.1} direction="left">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Depuis deux siècles, le ministère de l'Intérieur est au cœur de
                l'administration congolaise et assure sur tout le territoire le maintien et la
                cohésion des institutions du pays. Son organisation, ses moyens humains et
                matériels constituent l'outil privilégié de l'État pour garantir aux citoyens
                l'exercice des droits, devoirs et libertés. Ses missions s'articulent aujourd'hui
                autour de deux grands axes : administrer le territoire et garantir la sécurité
                des citoyens et des biens.
              </p>
            </div>
          </ScrollReveal>

          {/* Image du bâtiment */}
          <ScrollReveal delay={0.2} direction="right">
            <div className="relative">
              <div className="relative h-80 lg:h-96 bg-muted overflow-hidden hover-shadow-modern hover:scale-105 transition-all duration-500 cursor-pointer">
                <Image
                  src="https://interieur.gouv.cg/wp-content/uploads/2023/08/IMG-20230816-WA0024.jpg"
                  alt="Bâtiment du ministère de l'intérieur"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}