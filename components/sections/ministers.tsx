"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Minister {
  id: string;
  name: string;
  position: string;
  image: string;
  href: string;
}

const ministers: Minister[] = [
  {
    id: "ministre-interieur",
    name: "Raymond Zéphirin MBOULOU",
    position: "Ministre de l'intérieur",
    image: "/raymond-zephirin-mboulou.webp",
    href: "/ministres/interieur",
  },
  {
    id: "ministre-delegue",
    name: "Claudine MUNARI",
    position: "Ministre déléguée auprès du ministre de l'intérieur",
    image: "/claudine-munari.webp",
    href: "/ministres/delegue",
  },
];

export function Ministers() {
  return (
    <section className="bg-background text-foreground py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12"
        >
          Les ministres
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {ministers.map((minister, index) => (
            <motion.div
              key={minister.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Link
                href={minister.href}
                className="block bg-card border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group"
              >
                {/* Photo du ministre qui prend toute la largeur */}
                <div className="relative h-80 w-full bg-muted overflow-hidden">
                  <Image
                    src={minister.image}
                    alt={minister.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Informations du ministre */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                    {minister.name}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {minister.position}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
