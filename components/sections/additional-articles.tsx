"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, ArrowRight } from "lucide-react"

interface Article {
  id: string
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  readTime: string
}

// Articles différents de ceux affichés en hero
const additionalArticles: Article[] = [
  {
    id: '5',
    title: 'Renforcement de la coopération transfrontalière',
    excerpt: 'Signature d\'accords de coopération avec les pays voisins pour lutter contre la criminalité transfrontalière.',
    image: '/placeholder-cooperation.jpg',
    category: 'Coopération',
    date: '23 octobre 2024',
    readTime: '3 min'
  },
  {
    id: '6',
    title: 'Digitalisation des services publics',
    excerpt: 'Lancement de nouveaux services en ligne pour faciliter les démarches administratives des citoyens.',
    image: '/placeholder-digital.jpg',
    category: 'Numérique',
    date: '22 octobre 2024',
    readTime: '4 min'
  },
  {
    id: '7',
    title: 'Formation des agents de l\'état civil',
    excerpt: 'Programme de formation pour améliorer la qualité des services d\'état civil dans tout le pays.',
    image: '/placeholder-formation.jpg',
    category: 'Formation',
    date: '21 octobre 2024',
    readTime: '2 min'
  },
  {
    id: '8',
    title: 'Nouveau centre de crise national',
    excerpt: 'Inauguration d\'un centre de gestion de crise pour améliorer la réponse aux situations d\'urgence.',
    image: '/placeholder-crisis.jpg',
    category: 'Sécurité',
    date: '20 octobre 2024',
    readTime: '5 min'
  },
  {
    id: '9',
    title: 'Réforme de l\'administration territoriale',
    excerpt: 'Présentation des nouvelles mesures pour moderniser l\'administration locale et régionale.',
    image: '/placeholder-reform.jpg',
    category: 'Réforme',
    date: '19 octobre 2024',
    readTime: '6 min'
  },
  {
    id: '10',
    title: 'Campagne de sensibilisation citoyenne',
    excerpt: 'Lancement d\'une campagne nationale pour sensibiliser les citoyens à leurs droits et devoirs.',
    image: '/placeholder-campaign.jpg',
    category: 'Citoyenneté',
    date: '18 octobre 2024',
    readTime: '3 min'
  },
  {
    id: '11',
    title: 'Partenariat avec la société civile',
    excerpt: 'Renforcement de la collaboration avec les organisations de la société civile pour une gouvernance participative.',
    image: '/placeholder-partnership.jpg',
    category: 'Partenariat',
    date: '17 octobre 2024',
    readTime: '4 min'
  },
  {
    id: '12',
    title: 'Amélioration des conditions carcérales',
    excerpt: 'Investissements pour moderniser les infrastructures pénitentiaires et améliorer les conditions de détention.',
    image: '/placeholder-prison.jpg',
    category: 'Justice',
    date: '16 octobre 2024',
    readTime: '5 min'
  }
]

export function AdditionalArticles() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Toutes nos actualités
            </h2>
            <p className="text-gray-600">
              Restez informé de toutes les activités du ministère
            </p>
          </div>
          <Button variant="outline" asChild className="hidden sm:flex">
            <Link href="/actualites">
              Voir toutes les actualités
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Grille responsive */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {additionalArticles.map((article) => (
            <Card key={article.id} className="group overflow-hidden hover:bg-muted/50 transition-colors duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-white/90 text-gray-900">
                    {article.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-4">
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 leading-tight line-clamp-2 group-hover:text-blue-600 transition-colors">
                    <Link href={`/actualites/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-gray-600 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <time dateTime={article.date}>
                      {new Date(article.date.split(' ').reverse().join('-')).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'short'
                      })}
                    </time>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <Link
                    href={`/actualites/${article.id}`}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1 group"
                  >
                    Lire l'article
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bouton mobile */}
        <div className="mt-8 text-center sm:hidden">
          <Button asChild className="w-full">
            <Link href="/actualites">
              Voir toutes les actualités
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Newsletter */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-3">
              Recevez nos actualités
            </h3>
            <p className="text-blue-100 mb-6">
              Inscrivez-vous à notre newsletter pour recevoir les dernières informations
              du ministère directement dans votre boîte mail
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                S'inscrire
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}