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
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
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
                          href="/actualites/ministre"
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
                          href="/actualites/communiques"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Communiqué de presse
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Communications officielles du ministère
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/actualites/dossiers-presse"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Dossier de presse
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Documents et ressources pour la presse
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/actualites/grands-dossiers"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Grands dossiers
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Sujets majeurs et politiques publiques
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

            {/* Toggle Switch à droite */}
            <div className="flex items-center">
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button variant="ghost" size="sm">
                Menu
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
