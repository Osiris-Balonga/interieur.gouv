"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ScrollReveal } from "@/components/ui/scroll-reveal"

interface Article {
  id: string
  title: string
  excerpt: string
  image: string
  date: string
}

// Articles récents du blog
const articles: Article[] = [
  {
    id: 'plan-securite-ministere-2025',
    title: 'Plan de sécurité renforcé pour 2025',
    excerpt: 'Le ministère de l\'Intérieur dévoile son nouveau plan de sécurité avec des mesures innovantes pour renforcer la protection des citoyens.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop&ixlib=rb-4.0.3',
    date: '20 octobre 2025'
  },
  {
    id: 'installation-nouveau-prefet-police',
    title: 'Installation du nouveau préfet de Police',
    excerpt: 'Lundi 27 octobre 2025, le ministre de l\'Intérieur, Laurent Nuñez a présidé la cérémonie d\'installation du nouveau préfet de Police, Patrice Faure.',
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop&ixlib=rb-4.0.3',
    date: '27 octobre 2025'
  },
  {
    id: 'violences-conjugales-statistiques-2024',
    title: 'Violences conjugales enregistrées par les services de sécurité',
    excerpt: 'En 2024, les services de sécurité ont enregistré 272 400 victimes de violences commises par leur partenaire ou ex-partenaire, un niveau quasi stable par rapport à 2023 (+0,4 %).',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop&ixlib=rb-4.0.3',
    date: '23 octobre 2025'
  },
  {
    id: 'cooperation-internationale-police',
    title: 'Renforcement de la coopération policière internationale',
    excerpt: 'Signature d\'accords bilatéraux avec trois pays africains pour lutter contre la criminalité transfrontalière.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop&ixlib=rb-4.0.3',
    date: '18 octobre 2025'
  }
]

export function HeroArticles() {
  const mainArticle = articles[0]
  const otherArticles = articles.slice(1)

  return (
    <section className="bg-background text-foreground py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">À la Une</h2>
            <Link
              href="/actualites"
              className="text-primary hover:text-primary/80 transition-colors text-lg font-medium hover:translate-x-1 transition-transform duration-200"
            >
              Toutes les actualités <span className="text-xl">→</span>
            </Link>
          </div>
        </ScrollReveal>

        {/* Article principal qui prend toute la largeur */}
        <ScrollReveal delay={0.1}>
          <div className="mb-8">
            <div className="grid md:grid-cols-2 gap-8 card-gradient border border-border hover-shadow-modern hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <div className="relative h-64 md:h-80">
              <Image
                src={mainArticle.image}
                alt={mainArticle.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-start p-6">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                <Link
                  href={`/actualites/${mainArticle.id}`}
                  className="hover:text-primary/80 transition-colors"
                >
                  {mainArticle.title}
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {mainArticle.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <time className="text-sm text-muted-foreground">{mainArticle.date}</time>
                <Link
                  href={`/actualites/${mainArticle.id}`}
                  className="text-primary hover:text-primary/80 transition-colors text-xl"
                >
                  →
                </Link>
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>

        {/* 3 articles en dessous en colonnes */}
        <div className="grid md:grid-cols-3 gap-6">
          {otherArticles.map((article, index) => (
            <ScrollReveal key={article.id} delay={0.2 + index * 0.1}>
              <div className="card-gradient border border-border overflow-hidden hover-shadow-modern hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="relative h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2 text-foreground leading-tight">
                  <Link
                    href={`/actualites/${article.id}`}
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    {article.title}
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <time className="text-xs text-muted-foreground">{article.date}</time>
                  <Link
                    href={`/actualites/${article.id}`}
                    className="text-primary hover:text-primary/80 transition-colors text-lg"
                  >
                    →
                  </Link>
                </div>
              </div>
              </div>
              </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}