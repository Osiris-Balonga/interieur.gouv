"use client"

import React from 'react'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Users, Globe } from "lucide-react"
import { GridPatternDashed } from "@/components/ui/grid-pattern-dashed"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

interface Procedure {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  duration: string
  documents: string[]
  link: string
  popular: boolean
}

const procedures: Procedure[] = [
  {
    id: 'cni',
    title: 'Carte Nationale d\'Identité',
    description: 'Demande ou renouvellement de votre carte d\'identité nationale',
    icon: <Users className="h-6 w-6" />,
    duration: '2-3 semaines',
    documents: ['Acte de naissance', 'Photo d\'identité', 'Justificatif de domicile'],
    link: '/demarches/cni',
    popular: true
  },
  {
    id: 'passeport',
    title: 'Passeport',
    description: 'Demande de passeport biométrique pour voyager à l\'étranger',
    icon: <Globe className="h-6 w-6" />,
    duration: '3-4 semaines',
    documents: ['CNI', 'Photo d\'identité', 'Timbre fiscal', 'Justificatif de domicile'],
    link: '/demarches/passeport',
    popular: true
  },
  {
    id: 'titre-sejour',
    title: 'Titre de Séjour',
    description: 'Demande ou renouvellement de titre de séjour pour les étrangers',
    icon: <FileText className="h-6 w-6" />,
    duration: '4-6 semaines',
    documents: ['Passeport', 'Visa', 'Justificatifs de ressources', 'Contrat de travail'],
    link: '/demarches/titre-sejour',
    popular: true
  }
]

export function AdministrativeProcedures() {
  const popularProcedures = procedures.filter(proc => proc.popular)

  return (
    <section className="py-16 bg-muted relative overflow-hidden">
      <GridPatternDashed />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Démarches administratives
            </h2>
          </div>
        </ScrollReveal>

        {/* Démarches populaires */}
        <div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {popularProcedures.map((procedure, index) => (
              <ScrollReveal key={procedure.id} delay={0.1 + index * 0.1}>
                <Card className="card-gradient hover:bg-muted/50 transition-colors hover-shadow-modern hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 text-primary rounded-lg flex-shrink-0 hover:scale-110 transition-transform duration-300">
                      <div className="icon-pulse">
                        {procedure.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground mb-1">
                        {procedure.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        {procedure.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {procedure.duration}
                        </span>
                        <Button variant="outline" size="sm" asChild className="hover:translate-x-1 transition-transform duration-200">
                          <Link href={procedure.link}>
                            En savoir plus
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}