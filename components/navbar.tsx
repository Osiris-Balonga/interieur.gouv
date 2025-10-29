"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Menu, X, Home, Newspaper, Users, Building2, FileText, HelpCircle, Vote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Section Logo - Position normale */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: isHomePage ? 3.0 : 0, // Délai seulement sur la page d'accueil
          ease: "easeOut",
        }}
        className="w-full bg-background navbar-transition"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: isHomePage ? 3.5 : 0.2, // Délai réduit sur les autres pages
            }}
            className="flex h-16 items-center justify-start"
          >
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.webp"
                alt="Logo Ministère de l'Intérieur"
                width={160}
                height={160}
                className="object-contain h-12 w-auto"
              />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Séparateur pleine largeur */}
      <div className="w-full border-t border-border"></div>

      {/* Section Navigation - Sticky */}
      <motion.nav
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: isHomePage ? 3.7 : 0.4, // Délai réduit sur les autres pages
          ease: "easeOut",
        }}
        className="sticky top-0 z-50 w-full bg-background border-b border-border navbar-transition"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            {/* Navigation Menu à gauche */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                {/* Actualités */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="flex items-center gap-1">
                    Actualités
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/actualites"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Toutes les actualités
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Voir toutes les actualités du ministère
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/actualites?category=actualites"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Actualités du ministre
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Dernières nouvelles et déclarations du ministre
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/actualites?category=communique"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Communiqués de presse
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Communications officielles du ministère
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/actualites?category=ceremonie"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Cérémonies officielles
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Événements et cérémonies du ministère
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Les ministres */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="flex items-center gap-1">
                    Les ministres
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/ministres/interieur"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Ministre de l'intérieur
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Profil et actions du ministre de l'intérieur
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/ministres/delegue"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Ministre déléguée
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Profil et missions du ministre déléguée
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/ministres/historique"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Historique
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Histoire des ministres de l'intérieur
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Le ministère */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/ministere"
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    >
                      Le ministère
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* A votre service */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/services"
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    >
                      A votre service
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Documentation */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/documentation"
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    >
                      Documentation
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Elections */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/elections"
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    >
                      Elections
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Desktop Theme Toggle */}
            <div className="hidden lg:flex items-center">
              <ThemeToggle />
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden flex items-center gap-2 ml-auto">
              <ThemeToggle />
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-2">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col">
                  <SheetHeader>
                    <SheetTitle className="text-left">Menu</SheetTitle>
                  </SheetHeader>

                  <div className="flex flex-col space-y-4 mt-6 overflow-y-auto flex-1 pr-2">
                    {/* Accueil */}
                    <SheetClose asChild>
                      <Link
                        href="/"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                        onClick={closeMenu}
                      >
                        <Home className="h-5 w-5 text-primary" />
                        <span className="font-medium">Accueil</span>
                      </Link>
                    </SheetClose>

                    <Separator />

                    {/* Actualités */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-3">
                        <Newspaper className="h-5 w-5 text-primary" />
                        <span className="font-medium">Actualités</span>
                      </div>
                      <div className="ml-8 space-y-1">
                        <SheetClose asChild>
                          <Link
                            href="/actualites"
                            className="block p-2 text-sm hover:bg-accent rounded transition-colors"
                            onClick={closeMenu}
                          >
                            Toutes les actualités
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link
                            href="/actualites?category=actualites"
                            className="block p-2 text-sm hover:bg-accent rounded transition-colors"
                            onClick={closeMenu}
                          >
                            Actualités du ministre
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link
                            href="/actualites?category=communique"
                            className="block p-2 text-sm hover:bg-accent rounded transition-colors"
                            onClick={closeMenu}
                          >
                            Communiqués de presse
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link
                            href="/actualites?category=ceremonie"
                            className="block p-2 text-sm hover:bg-accent rounded transition-colors"
                            onClick={closeMenu}
                          >
                            Cérémonies officielles
                          </Link>
                        </SheetClose>
                      </div>
                    </div>

                    <Separator />

                    {/* Les ministres */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-3">
                        <Users className="h-5 w-5 text-primary" />
                        <span className="font-medium">Les ministres</span>
                      </div>
                      <div className="ml-8 space-y-1">
                        <SheetClose asChild>
                          <Link
                            href="/ministres/interieur"
                            className="block p-2 text-sm hover:bg-accent rounded transition-colors"
                            onClick={closeMenu}
                          >
                            Ministre de l'intérieur
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link
                            href="/ministres/delegue"
                            className="block p-2 text-sm hover:bg-accent rounded transition-colors"
                            onClick={closeMenu}
                          >
                            Ministre déléguée
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link
                            href="/ministres/historique"
                            className="block p-2 text-sm hover:bg-accent rounded transition-colors"
                            onClick={closeMenu}
                          >
                            Historique
                          </Link>
                        </SheetClose>
                      </div>
                    </div>

                    <Separator />

                    {/* Autres liens */}
                    <SheetClose asChild>
                      <Link
                        href="/ministere"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                        onClick={closeMenu}
                      >
                        <Building2 className="h-5 w-5 text-primary" />
                        <span className="font-medium">Le ministère</span>
                      </Link>
                    </SheetClose>

                    <SheetClose asChild>
                      <Link
                        href="/services"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                        onClick={closeMenu}
                      >
                        <HelpCircle className="h-5 w-5 text-primary" />
                        <span className="font-medium">A votre service</span>
                      </Link>
                    </SheetClose>

                    <SheetClose asChild>
                      <Link
                        href="/documentation"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                        onClick={closeMenu}
                      >
                        <FileText className="h-5 w-5 text-primary" />
                        <span className="font-medium">Documentation</span>
                      </Link>
                    </SheetClose>

                    <SheetClose asChild>
                      <Link
                        href="/elections"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                        onClick={closeMenu}
                      >
                        <Vote className="h-5 w-5 text-primary" />
                        <span className="font-medium">Elections</span>
                      </Link>
                    </SheetClose>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
