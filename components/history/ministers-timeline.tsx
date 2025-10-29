"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface Minister {
  id: string
  name: string
  startYear: number
  endYear: number
  period: string
  image: string
  isCurrentMinister?: boolean
}

interface MinistersTimelineProps {
  ministers: Minister[]
}

export function MinistersTimeline({ ministers }: MinistersTimelineProps) {
  // Grouper les ministres par décennie
  const ministersByDecade = ministers.reduce((acc, minister) => {
    const decade = Math.floor(minister.startYear / 10) * 10
    if (!acc[decade]) {
      acc[decade] = []
    }
    acc[decade].push(minister)
    return acc
  }, {} as Record<number, Minister[]>)

  const decades = Object.keys(ministersByDecade).map(Number).sort((a, b) => b - a) // Ordre inverse : récent vers ancien

  return (
    <>
      {/* Version Desktop - Timeline alternée */}
      <div className="relative hidden lg:block">
        {/* Timeline centrale */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20"></div>

        <div className="space-y-16">
          {decades.map((decade, decadeIndex) => (
            <motion.div
              key={decade}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: decadeIndex * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Marqueur de décennie */}
              <div className="flex justify-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: decadeIndex * 0.2 + 0.2 }}
                  viewport={{ once: true }}
                  className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-bold text-lg shadow-lg"
                >
                  {decade}s
                </motion.div>
              </div>

              {/* Ministres de cette décennie */}
              <div className="space-y-8">
                {ministersByDecade[decade]
                  .sort((a, b) => b.startYear - a.startYear)
                  .map((minister, ministerIndex) => (
                  <motion.div
                    key={minister.id}
                    initial={{ opacity: 0, x: ministerIndex % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: decadeIndex * 0.2 + ministerIndex * 0.1
                    }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${
                      ministerIndex % 2 === 0 ? 'justify-start pr-1/2' : 'justify-end pl-1/2'
                    }`}
                  >
                    {/* Point sur la timeline */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: decadeIndex * 0.2 + ministerIndex * 0.1 + 0.3
                      }}
                      viewport={{ once: true }}
                      className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full z-10 ${
                        minister.isCurrentMinister
                          ? 'bg-primary ring-4 ring-primary/30'
                          : 'bg-background border-2 border-primary'
                      }`}
                    ></motion.div>

                    {/* Carte du ministre */}
                    <Card className={`w-96 hover:shadow-lg transition-all duration-300 group ${
                      ministerIndex % 2 === 0 ? 'mr-8' : 'ml-8'
                    }`}>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          {/* Photo */}
                          <div className="relative w-20 h-20 shrink-0">
                            <Image
                              src={minister.image}
                              alt={minister.name}
                              fill
                              className="object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>

                          {/* Informations */}
                          <div className="flex-1">
                            <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                              {minister.name}
                            </h3>
                            <p className="text-base text-muted-foreground">
                              {minister.period}
                            </p>
                            {minister.isCurrentMinister && (
                              <span className="inline-block mt-1 px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                                Ministre actuel
                              </span>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Version Mobile - Liste simple */}
      <div className="block lg:hidden">
        <div className="space-y-12">
          {decades.map((decade, decadeIndex) => (
            <motion.div
              key={decade}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: decadeIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Marqueur de décennie */}
              <div className="text-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: decadeIndex * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold shadow-lg"
                >
                  {decade}s
                </motion.div>
              </div>

              {/* Ministres de cette décennie */}
              <div className="space-y-4">
                {ministersByDecade[decade]
                  .sort((a, b) => b.startYear - a.startYear)
                  .map((minister, ministerIndex) => (
                  <motion.div
                    key={minister.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: decadeIndex * 0.1 + ministerIndex * 0.05
                    }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover:shadow-lg transition-all duration-300 group">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          {/* Photo */}
                          <div className="relative w-16 h-16 flex-shrink-0">
                            <Image
                              src={minister.image}
                              alt={minister.name}
                              fill
                              className="object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>

                          {/* Informations */}
                          <div className="flex-1">
                            <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                              {minister.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {minister.period}
                            </p>
                            {minister.isCurrentMinister && (
                              <span className="inline-block mt-1 px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                                Ministre actuel
                              </span>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}