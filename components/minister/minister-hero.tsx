"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Twitter, Linkedin, Instagram } from "lucide-react"

interface MinisterHeroProps {
  name: string
  title: string
  image: string
  biography: string
  socialLinks?: {
    twitter?: string
    linkedin?: string
    instagram?: string
  }
}

export function MinisterHero({ name, title, image, biography, socialLinks }: MinisterHeroProps) {
  return (
    <section className="py-12 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-foreground mb-2">{title}</h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Photo du ministre */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="overflow-hidden h-96 p-0">
              <CardContent className="p-0">
                <div className="relative h-96 w-full">
                  <Image
                    src={image}
                    alt={`Photo de ${name}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Informations du ministre */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">{name}</h2>
              <p className="text-lg text-muted-foreground mb-4">{title}</p>

              <div className="space-y-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href="#biographie">Biographie</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="#parcours">Parcours</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="#cabinet">Cabinet du ministre</Link>
                </Button>
              </div>

              {/* Liens sociaux */}
              {socialLinks && (
                <div className="flex space-x-3 mt-4">
                  {socialLinks.twitter && (
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-4 w-4" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                    </Button>
                  )}
                  {socialLinks.linkedin && (
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    </Button>
                  )}
                  {socialLinks.instagram && (
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-4 w-4" />
                        <span className="sr-only">Instagram</span>
                      </Link>
                    </Button>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Section Biographie */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          id="biographie"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Biographie</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground leading-relaxed">{biography}</p>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </section>
  )
}