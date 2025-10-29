"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Calendar, Clock, Award } from "lucide-react"

interface HistoryStatsProps {
  totalMinisters: number
  yearsSinceIndependence: number
  averageTenure: string
  longestTenure: {
    name: string
    duration: string
  }
}

export function HistoryStats({
  totalMinisters,
  yearsSinceIndependence,
  averageTenure,
  longestTenure
}: HistoryStatsProps) {
  const stats = [
    {
      icon: Users,
      label: "Ministres depuis 1960",
      value: totalMinisters.toString(),
      description: "Personnalités ayant dirigé le ministère"
    },
    {
      icon: Calendar,
      label: "Années d'histoire",
      value: yearsSinceIndependence.toString(),
      description: "Depuis l'indépendance du Congo"
    },
    {
      icon: Clock,
      label: "Durée moyenne",
      value: averageTenure,
      description: "Temps moyen en fonction"
    },
    {
      icon: Award,
      label: "Plus long mandat",
      value: longestTenure.duration,
      description: longestTenure.name
    }
  ]

  return (
    <section className="py-12 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Historique du ministère de l'Intérieur
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Découvrez l'histoire des personnalités qui ont dirigé le ministère de l'Intérieur
            de la République du Congo depuis l'indépendance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      <IconComponent className="w-8 h-8" />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    >
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {stat.value}
                      </h3>
                      <p className="font-medium text-primary mb-2">
                        {stat.label}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {stat.description}
                      </p>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}