'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { PageTransition } from '@/components/ui/page-transition';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Search, Filter, Calendar, Tag, ArrowRight } from 'lucide-react';
import { blogPosts, categories, themes, filterPosts, type BlogPost } from '@/data/blogs';
import Image from 'next/image';
import Link from 'next/link';

const ITEMS_PER_PAGE = 9;

function ActualitesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [selectedTheme, setSelectedTheme] = useState(searchParams.get('theme') || '');
  const [selectedPeriod, setSelectedPeriod] = useState<'week' | 'month' | 'year' | ''>(
    (searchParams.get('period') as 'week' | 'month' | 'year') || ''
  );
  const [currentPage, setCurrentPage] = useState(1);

  // Filter posts based on current filters
  const filteredPosts = useMemo(() => {
    return filterPosts(blogPosts, {
      search: searchTerm,
      category: selectedCategory || undefined,
      theme: selectedTheme || undefined,
      period: selectedPeriod || undefined,
    });
  }, [searchTerm, selectedCategory, selectedTheme, selectedPeriod]);

  // Paginate results
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredPosts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);

  // Update URL with current filters
  const updateFilters = (newFilters: Record<string, string>) => {
    const params = new URLSearchParams();

    Object.entries({
      search: searchTerm,
      category: selectedCategory,
      theme: selectedTheme,
      period: selectedPeriod,
      ...newFilters
    }).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });

    const queryString = params.toString();
    router.push(`/actualites${queryString ? `?${queryString}` : ''}`);
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedTheme('');
    setSelectedPeriod('');
    setCurrentPage(1);
    router.push('/actualites');
  };

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

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Header */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 pt-24 pb-12">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Actualités
                </h1>
                <p className="text-xl text-muted-foreground mb-4">
                  Retrouvez toutes les actualités relatives au ministère.
                </p>
                <p className="text-lg text-muted-foreground">
                  Vous pouvez filtrer votre recherche par mot, par type, par thème et par période.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <aside className="lg:col-span-1">
              <ScrollReveal>
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-6">
                      <Filter className="h-5 w-5 text-primary" />
                      <h2 className="font-semibold text-lg">Filtres</h2>
                    </div>

                    {/* Search */}
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Rechercher</label>
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            placeholder="Rechercher..."
                            value={searchTerm}
                            onChange={(e) => {
                              setSearchTerm(e.target.value);
                              setCurrentPage(1);
                            }}
                            className="pl-10"
                          />
                        </div>
                      </div>

                      <Separator />

                      {/* Category Filter */}
                      <div>
                        <label className="text-sm font-medium mb-3 block">Type</label>
                        <div className="space-y-2">
                          <Button
                            variant={selectedCategory === '' ? 'default' : 'ghost'}
                            size="sm"
                            className="w-full justify-start"
                            onClick={() => {
                              setSelectedCategory('');
                              setCurrentPage(1);
                            }}
                          >
                            Tous les types
                          </Button>
                          {categories.map((category) => (
                            <Button
                              key={category.id}
                              variant={selectedCategory === category.id ? 'default' : 'ghost'}
                              size="sm"
                              className="w-full justify-start text-left"
                              onClick={() => {
                                setSelectedCategory(category.id);
                                setCurrentPage(1);
                              }}
                            >
                              {category.label}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      {/* Theme Filter */}
                      <div>
                        <label className="text-sm font-medium mb-3 block">Thème</label>
                        <div className="space-y-2">
                          <Button
                            variant={selectedTheme === '' ? 'default' : 'ghost'}
                            size="sm"
                            className="w-full justify-start"
                            onClick={() => {
                              setSelectedTheme('');
                              setCurrentPage(1);
                            }}
                          >
                            Tous les thèmes
                          </Button>
                          {themes.map((theme) => (
                            <Button
                              key={theme.id}
                              variant={selectedTheme === theme.id ? 'default' : 'ghost'}
                              size="sm"
                              className="w-full justify-start"
                              onClick={() => {
                                setSelectedTheme(theme.id);
                                setCurrentPage(1);
                              }}
                            >
                              {theme.label}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      {/* Period Filter */}
                      <div>
                        <label className="text-sm font-medium mb-3 block">Période prédéfinie</label>
                        <div className="space-y-2">
                          {[
                            { value: '', label: 'Toute période' },
                            { value: 'week', label: 'Moins d\'une semaine' },
                            { value: 'month', label: 'Moins d\'un mois' },
                            { value: 'year', label: 'Moins d\'un an' }
                          ].map((period) => (
                            <Button
                              key={period.value}
                              variant={selectedPeriod === period.value ? 'default' : 'ghost'}
                              size="sm"
                              className="w-full justify-start"
                              onClick={() => {
                                setSelectedPeriod(period.value as any);
                                setCurrentPage(1);
                              }}
                            >
                              {period.label}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      {/* Apply/Reset Buttons */}
                      <div className="space-y-2 pt-4">
                        <Button
                          className="w-full"
                          onClick={() => updateFilters({})}
                        >
                          Appliquer les filtres
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={resetFilters}
                        >
                          Réinitialiser les filtres
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-3">
              {/* Results Header */}
              <ScrollReveal>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">
                      {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} trouvé{filteredPosts.length !== 1 ? 's' : ''}
                    </h2>
                    {(selectedCategory || selectedTheme || selectedPeriod || searchTerm) && (
                      <div className="flex flex-wrap gap-2">
                        {selectedCategory && (
                          <Badge variant="secondary">
                            Type: {getCategoryLabel(selectedCategory)}
                          </Badge>
                        )}
                        {selectedTheme && (
                          <Badge variant="secondary">
                            Thème: {getThemeLabel(selectedTheme)}
                          </Badge>
                        )}
                        {selectedPeriod && (
                          <Badge variant="secondary">
                            Période: {selectedPeriod === 'week' ? 'Semaine' : selectedPeriod === 'month' ? 'Mois' : 'Année'}
                          </Badge>
                        )}
                        {searchTerm && (
                          <Badge variant="secondary">
                            Recherche: "{searchTerm}"
                          </Badge>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>

              {/* Blog Posts Grid */}
              {filteredPosts.length === 0 ? (
                <ScrollReveal>
                  <Card className="p-12 text-center">
                    <div className="text-muted-foreground">
                      <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <h3 className="text-lg font-medium mb-2">Aucun article trouvé</h3>
                      <p>Essayez de modifier vos critères de recherche</p>
                    </div>
                  </Card>
                </ScrollReveal>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                  {paginatedPosts.map((post, index) => (
                    <ScrollReveal key={post.id} delay={index * 0.1}>
                      <Link href={`/actualites/${post.slug}`}>
                        <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer h-full pt-0">
                          <div className="relative h-48 overflow-hidden">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-4 left-4">
                              <Badge className="bg-primary/90 text-primary-foreground">
                                {getCategoryLabel(post.category)}
                              </Badge>
                            </div>
                          </div>
                          <CardContent className="p-6 flex flex-col flex-1">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {formatDate(post.date)}
                              </div>
                              <div className="flex items-center gap-1">
                                <Tag className="h-4 w-4" />
                                {getThemeLabel(post.theme)}
                              </div>
                            </div>
                            <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="text-muted-foreground text-sm line-clamp-3 flex-1">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between mt-4 pt-4 border-t">
                              <div className="flex flex-wrap gap-1">
                                {post.tags.slice(0, 2).map((tag) => (
                                  <Badge key={tag} variant="outline" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                                {post.tags.length > 2 && (
                                  <Badge variant="outline" className="text-xs">
                                    +{post.tags.length - 2}
                                  </Badge>
                                )}
                              </div>
                              <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </ScrollReveal>
                  ))}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <ScrollReveal>
                  <div className="flex justify-center gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                    >
                      Précédent
                    </Button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? 'default' : 'outline'}
                        onClick={() => setCurrentPage(page)}
                        className="w-10"
                      >
                        {page}
                      </Button>
                    ))}

                    <Button
                      variant="outline"
                      onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                    >
                      Suivant
                    </Button>
                  </div>
                </ScrollReveal>
              )}
            </main>
          </div>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
}

export default function ActualitesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 pt-24 pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="h-12 bg-muted animate-pulse rounded mb-6"></div>
              <div className="h-6 bg-muted animate-pulse rounded mb-4"></div>
              <div className="h-6 bg-muted animate-pulse rounded"></div>
            </div>
          </div>
        </section>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <div className="h-96 bg-muted animate-pulse rounded"></div>
            </aside>
            <main className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-96 bg-muted animate-pulse rounded"></div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    }>
      <ActualitesContent />
    </Suspense>
  );
}