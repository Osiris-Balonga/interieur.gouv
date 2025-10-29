"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface CabinetMember {
  name: string
  position: string
  appointmentType: string
  appointmentDate: string
}

interface MinisterCabinetProps {
  cabinetMembers: CabinetMember[]
}

export function MinisterCabinet({ cabinetMembers }: MinisterCabinetProps) {
  return (
    <section className="py-12 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          id="cabinet"
        >
          <h2 className="text-2xl font-bold text-foreground mb-8">Cabinet du ministre</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cabinetMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <h3 className="font-bold text-foreground text-lg leading-tight">
                        {member.name}
                      </h3>

                      <p className="font-medium text-primary">
                        {member.position}
                      </p>

                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">Nomination</span>
                        </p>
                        <p className="text-sm text-foreground">
                          {member.appointmentType} {member.appointmentDate}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}