'use client';

import { notFound } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { PageTransition } from '@/components/ui/page-transition';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import {
  Calendar,
  Tag,
  User,
  ArrowLeft,
  ArrowRight,
  Share2,
  ChevronRight,
  Home
} from 'lucide-react';
import { getBlogPost, getRelatedPosts, categories, themes } from '@/data/blogs';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const post = getBlogPost(slug);
  const relatedPosts = getRelatedPosts(slug, 3);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getCategoryLabel = (categoryId: string) => {
    return categories.find(cat => cat.id === categoryId)?.label || categoryId;
  };

  const getThemeLabel = (themeId: string) => {
    return themes.find(theme => theme.id === themeId)?.label || themeId;
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Breadcrumb */}
        <section className="bg-background pt-12 pb-6">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Link
                  href="/"
                  className="flex items-center hover:text-primary transition-colors"
                >
                  <Home className="h-4 w-4 mr-1" />
                  Accueil
                </Link>
                <ChevronRight className="h-4 w-4" />
                <Link
                  href="/actualites"
                  className="hover:text-primary transition-colors"
                >
                  Actualités
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-foreground font-medium truncate max-w-xs">
                  {post.title}
                </span>
              </nav>
            </ScrollReveal>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <main className="lg:col-span-3 order-1 lg:order-1">
              <ScrollReveal>
                <article className="bg-background">
                  {/* Article Header */}
                  <div className="mb-8">
                    <Link
                      href="/actualites"
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Retour aux actualités
                    </Link>

                    {/* Featured Image */}
                    <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden mb-6">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary/90 text-primary-foreground">
                          {getCategoryLabel(post.category)}
                        </Badge>
                      </div>
                    </div>

                    {/* Article Meta */}
                    <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Tag className="h-4 w-4" />
                        <span>{getThemeLabel(post.theme)}</span>
                      </div>
                      {post.author && (
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleShare}
                        className="ml-auto"
                      >
                        <Share2 className="h-4 w-4 mr-2" />
                        Partager
                      </Button>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                      {post.title}
                    </h1>

                    {/* Excerpt */}
                    <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Separator className="mb-8" />

                  {/* Article Content */}
                  <div className="prose prose-gray dark:prose-invert max-w-none">
                    <ReactMarkdown
                      components={{
                        h1: ({ children }) => (
                          <h1 className="text-3xl font-bold text-foreground mt-8 mb-4 first:mt-0">
                            {children}
                          </h1>
                        ),
                        h2: ({ children }) => (
                          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                            {children}
                          </h2>
                        ),
                        h3: ({ children }) => (
                          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                            {children}
                          </h3>
                        ),
                        h4: ({ children }) => (
                          <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">
                            {children}
                          </h4>
                        ),
                        p: ({ children }) => (
                          <p className="text-foreground/90 leading-relaxed mb-4">
                            {children}
                          </p>
                        ),
                        ul: ({ children }) => (
                          <ul className="list-disc list-inside space-y-2 mb-4 text-foreground/90">
                            {children}
                          </ul>
                        ),
                        ol: ({ children }) => (
                          <ol className="list-decimal list-inside space-y-2 mb-4 text-foreground/90">
                            {children}
                          </ol>
                        ),
                        blockquote: ({ children }) => (
                          <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/80 bg-primary/5 py-2 my-6">
                            {children}
                          </blockquote>
                        ),
                        table: ({ children }) => (
                          <div className="overflow-x-auto mb-6">
                            <table className="min-w-full border-collapse border border-border">
                              {children}
                            </table>
                          </div>
                        ),
                        th: ({ children }) => (
                          <th className="border border-border bg-muted px-4 py-2 text-left font-semibold">
                            {children}
                          </th>
                        ),
                        td: ({ children }) => (
                          <td className="border border-border px-4 py-2">
                            {children}
                          </td>
                        ),
                        strong: ({ children }) => (
                          <strong className="font-semibold text-foreground">
                            {children}
                          </strong>
                        ),
                        em: ({ children }) => (
                          <em className="italic text-foreground/80">
                            {children}
                          </em>
                        ),
                        hr: () => (
                          <hr className="border-border my-8" />
                        ),
                      }}
                    >
                      {post.content}
                    </ReactMarkdown>
                  </div>

                  <Separator className="my-8" />

                  {/* Article Footer */}
                  <div className="flex items-center justify-between">
                    <Button
                      variant="ghost"
                      onClick={handleShare}
                      className="flex items-center gap-2"
                    >
                      <Share2 className="h-4 w-4" />
                      Partager cet article
                    </Button>

                    <Link
                      href="/actualites"
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      Voir toutes les actualités
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            </main>

            {/* Sidebar */}
            <aside className="lg:col-span-1 order-2 lg:order-2">
              <div className="sticky top-24 space-y-6">
                {/* Related Articles */}
                <ScrollReveal>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-4">Articles similaires</h3>

                      {relatedPosts.length === 0 ? (
                        <p className="text-muted-foreground text-sm">
                          Aucun article similaire trouvé.
                        </p>
                      ) : (
                        <div className="space-y-4">
                          {relatedPosts.map((relatedPost) => (
                            <Link
                              key={relatedPost.id}
                              href={`/actualites/${relatedPost.slug}`}
                              className="block group"
                            >
                              <div className="flex gap-3">
                                <div className="relative w-16 h-12 rounded overflow-hidden flex-shrink-0">
                                  <Image
                                    src={relatedPost.image}
                                    alt={relatedPost.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                                    {relatedPost.title}
                                  </h4>
                                  <p className="text-xs text-muted-foreground mt-1">
                                    {formatDate(relatedPost.date)}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}

                      <Separator className="my-4" />

                      <Link href="/actualites">
                        <Button variant="outline" className="w-full">
                          Voir toutes les actualités
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                {/* Quick Links */}
                <ScrollReveal delay={0.1}>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-4">Liens rapides</h3>
                      <div className="space-y-3">
                        <Link
                          href="/actualites?category=actualites"
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          Actualités du ministre
                        </Link>
                        <Link
                          href="/actualites?category=communique"
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          Communiqués de presse
                        </Link>
                        <Link
                          href="/actualites?category=ceremonie"
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          Cérémonies
                        </Link>
                        <Link
                          href="/actualites?theme=securite"
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          Sécurité
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>
            </aside>
          </div>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
}