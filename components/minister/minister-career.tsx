"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface CareerItem {
  year: string
  position: string
  description?: string
}

interface MinisterCareerProps {
  career: CareerItem[]
}

export function MinisterCareer({ career }: MinisterCareerProps) {
  return (
    <section className="py-12 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          id="parcours"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Parcours</h2>

          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {career.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4 pb-4 border-b border-border last:border-b-0 last:pb-0"
                  >
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                        •
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h3 className="font-medium text-foreground">{item.position}</h3>
                        <span className="text-sm text-muted-foreground font-medium">{item.year}</span>
                      </div>
                      {item.description && (
                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}