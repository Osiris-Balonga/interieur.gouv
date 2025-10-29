"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Shield, Flame, Car, AlertTriangle, Heart, FileText, Users } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

interface Service {
  id: string
  title: string
  description: string
  number: string
  icon: React.ReactNode
  available: string
  color: string
}

const services: Service[] = [
  {
    id: 'police',
    title: 'Police Secours',
    description: 'En cas d\'urgence, agression, vol, accident',
    number: '117',
    icon: <Shield className="h-6 w-6" />,
    available: '24h/24 - 7j/7',
    color: 'bg-blue-600 hover:bg-blue-700'
  },
  {
    id: 'pompiers',
    title: 'Sapeurs-Pompiers',
    description: 'Incendie, accident, secours d\'urgence',
    number: '118',
    icon: <Flame className="h-6 w-6" />,
    available: '24h/24 - 7j/7',
    color: 'bg-red-600 hover:bg-red-700'
  },
  {
    id: 'samu',
    title: 'SAMU',
    description: 'Urgences médicales, détresse vitale',
    number: '115',
    icon: <Heart className="h-6 w-6" />,
    available: '24h/24 - 7j/7',
    color: 'bg-green-600 hover:bg-green-700'
  },
  {
    id: 'gendarmerie',
    title: 'Gendarmerie',
    description: 'Sécurité routière, zones rurales',
    number: '117',
    icon: <Car className="h-6 w-6" />,
    available: '24h/24 - 7j/7',
    color: 'bg-indigo-600 hover:bg-indigo-700'
  },
  {
    id: 'urgence-generale',
    title: 'Numéro d\'urgence européen',
    description: 'Toutes urgences depuis un portable',
    number: '112',
    icon: <AlertTriangle className="h-6 w-6" />,
    available: '24h/24 - 7j/7',
    color: 'bg-orange-600 hover:bg-orange-700'
  },
  {
    id: 'info-service',
    title: 'Renseignements administratifs',
    description: 'Information sur les démarches',
    number: '39 39',
    icon: <Phone className="h-6 w-6" />,
    available: 'Lun-Ven 8h-19h',
    color: 'bg-gray-600 hover:bg-gray-700'
  }
]

export function UserServices() {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              À votre service
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Police Nationale */}
          <ScrollReveal delay={0.1}>
            <Card className="card-gradient border-border hover:bg-muted/50 transition-colors cursor-pointer border-b-6 border-b-primary hover-shadow-modern hover:-translate-y-1 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-primary rounded-lg flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-white icon-pulse" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Police Nationale
              </h3>
              <div className="mt-6">
                <Button variant="ghost" size="lg" className="text-foreground hover:text-foreground/80 text-2xl hover:translate-x-1 transition-transform duration-200">
                  →
                </Button>
              </div>
            </CardContent>
            </Card>
          </ScrollReveal>

          {/* Pompiers */}
          <ScrollReveal delay={0.2}>
            <Card className="card-gradient border-border hover:bg-muted/50 transition-colors cursor-pointer border-b-6 border-b-primary hover-shadow-modern hover:-translate-y-1 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto border-2 border-destructive rounded-lg flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
                  <Flame className="h-8 w-8 text-destructive icon-pulse" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Pompiers
              </h3>
              <div className="mt-6">
                <Button variant="ghost" size="lg" className="text-foreground hover:text-foreground/80 text-2xl hover:translate-x-1 transition-transform duration-200">
                  →
                </Button>
              </div>
            </CardContent>
            </Card>
          </ScrollReveal>

          {/* Contacter nos services */}
          <ScrollReveal delay={0.3}>
            <Card className="card-gradient border-border hover:bg-muted/50 transition-colors cursor-pointer border-b-6 border-b-primary hover-shadow-modern hover:-translate-y-1 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto border-2 border-primary rounded-lg flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
                  <Phone className="h-8 w-8 text-primary icon-pulse" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Contacter nos services
              </h3>
              <div className="mt-6">
                <Button variant="ghost" size="lg" className="text-foreground hover:text-foreground/80 text-2xl hover:translate-x-1 transition-transform duration-200">
                  →
                </Button>
              </div>
            </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}