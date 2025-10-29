"use client";

import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background text-foreground border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Contenu principal du footer */}
        <div className="py-12">
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Logo et description */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-3 mb-4">
                <Image
                  src="/logo.webp"
                  alt="Logo Ministère de l'Intérieur"
                  width={160}
                  height={160}
                  className="object-contain h-16 w-auto"
                />
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                République du Congo - Au service de la nation et de ses
                citoyens, pour une République forte et unie.
              </p>
              <div className="flex space-x-3">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Navigation rapide */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    href="/actualites"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Actualités
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ministres"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Les ministres
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ministere"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Le ministère
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    A votre service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/documentation"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/elections"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Elections
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services aux citoyens */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">
                Services citoyens
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/demarches/cni"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Carte d'identité
                  </Link>
                </li>
                <li>
                  <Link
                    href="/demarches/passeport"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Passeport
                  </Link>
                </li>
                <li>
                  <Link
                    href="/demarches/titre-sejour"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Titre de séjour
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/urgences"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Numéros d'urgence
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/contact"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Nous contacter
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/rendez-vous"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Prendre rendez-vous
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div className="text-muted-foreground">
                    <p>Place de la République</p>
                    <p>BP 2106, Brazzaville</p>
                    <p>République du Congo</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-muted-foreground">
                    +242 05 532 70 00
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-muted-foreground">
                    contact@interieur.gouv.cg
                  </span>
                </div>
              </div>

              {/* Numéros d'urgence */}
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <h4 className="font-medium text-foreground mb-2">Urgences</h4>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Police:</span>
                    <span className="text-foreground font-medium">117</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pompiers:</span>
                    <span className="text-foreground font-medium">118</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">SAMU:</span>
                    <span className="text-foreground font-medium">115</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Barre du bas */}
        <div className="py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 Ministère de l'Intérieur - République du Congo. Tous droits
              réservés.
            </div>
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <Link
                href="/mentions-legales"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Politique de confidentialité
              </Link>
              <Link
                href="/plan-site"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Plan du site
              </Link>
              <Link
                href="/accessibilite"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Accessibilité
              </Link>
            </div>
          </div>
        </div>

        {/* Bande République du Congo */}
        <div className="bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 h-1"></div>
      </div>
    </footer>
  );
}
