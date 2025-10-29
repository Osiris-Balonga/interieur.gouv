export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Markdown content
  image: string;
  date: string;
  category: 'actualites' | 'communique' | 'ceremonie' | 'visite' | 'securite';
  theme: 'police' | 'gendarmerie' | 'administration' | 'securite' | 'international';
  author?: string;
  tags: string[];
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'installation-nouveau-prefet-police',
    title: 'Installation du nouveau préfet de Police',
    excerpt: 'Lundi 27 octobre 2025, le ministre de l\'Intérieur, Laurent Nuñez a présidé la cérémonie d\'installation du nouveau préfet de Police, Patrice Faure.',
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop&ixlib=rb-4.0.3',
    date: '2025-10-27',
    category: 'ceremonie',
    theme: 'police',
    author: 'Service Communication',
    tags: ['préfet', 'police', 'nomination', 'cérémonie'],
    featured: true,
    content: `# Installation du nouveau préfet de Police

## Une cérémonie officielle au ministère

Le **lundi 27 octobre 2025**, le ministre de l'Intérieur, **Laurent Nuñez**, a présidé la cérémonie d'installation du nouveau préfet de Police, **Patrice Faure**, dans les salons du ministère de l'Intérieur.

### Un parcours exemplaire

Patrice Faure, âgé de 52 ans, apporte à cette fonction une expérience riche et diversifiée :

- **Formation** : Diplômé de l'École nationale d'administration (ENA)
- **Carrière** : 25 années au service de l'État
- **Expérience internationale** : Missions en Afrique et en Europe
- **Spécialités** : Sécurité urbaine et maintien de l'ordre

### Les priorités du nouveau préfet

Dans son discours d'installation, le nouveau préfet a évoqué ses principales priorités :

#### 1. Sécurité urbaine
> "La sécurité des citoyens reste notre préoccupation première. Nous renforcerons la présence policière dans les quartiers sensibles."

#### 2. Modernisation des services
- Digitalisation des procédures
- Formation continue des agents
- Amélioration de l'accueil du public

#### 3. Coopération internationale
Le préfet souhaite développer les échanges avec les services de police européens et africains.

### Les défis à relever

Le nouveau préfet hérite d'un contexte particulier :

- **Statistiques 2024** : 272 400 victimes de violences enregistrées
- **Évolution** : Niveau quasi stable par rapport à 2023 (+0,4 %)
- **Objectifs** : Réduction de 5% des infractions d'ici 2026

### Témoignages

**Le ministre de l'Intérieur** :
*"Patrice Faure dispose de toutes les qualités nécessaires pour mener à bien cette mission. Sa connaissance du terrain et son expérience internationale seront des atouts précieux."*

**Le nouveau préfet** :
*"Je mesure l'honneur et la responsabilité qui me sont confiés. Nous travaillerons en étroite collaboration avec tous les acteurs de la sécurité."*

### Conclusion

Cette nomination s'inscrit dans la continuité de la politique de sécurité menée par le gouvernement, avec un accent particulier sur la proximité et la modernisation des services.

---

*Contacts presse :*
- Service communication du ministère : 01 49 27 49 27
- Préfecture de police : 01 53 71 53 71`
  },
  {
    id: '2',
    slug: 'violences-conjugales-statistiques-2024',
    title: 'Violences conjugales enregistrées par les services de sécurité',
    excerpt: 'En 2024, les services de sécurité ont enregistré 272 400 victimes de violences commises par leur partenaire ou ex-partenaire, un niveau quasi stable par rapport à 2023 (+0,4 %).',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop&ixlib=rb-4.0.3',
    date: '2025-10-23',
    category: 'actualites',
    theme: 'securite',
    author: 'Observatoire National',
    tags: ['violences conjugales', 'statistiques', 'sécurité', '2024'],
    featured: true,
    content: `# Violences conjugales : Bilan statistique 2024

## Des chiffres qui interrogent

L'**Observatoire National de la Délinquance et des Réponses Pénales** publie son rapport annuel sur les violences conjugales. Les chiffres de 2024 révèlent une situation préoccupante mais stable.

### Les données clés

#### Victimes enregistrées
- **Total 2024** : 272 400 victimes
- **Évolution** : +0,4% par rapport à 2023
- **Répartition** : 87% de femmes, 13% d'hommes

#### Types de violences
| Type de violence | Nombre de cas | Évolution |
|------------------|---------------|-----------|
| Violences physiques | 145 200 | +1,2% |
| Violences psychologiques | 89 800 | -0,8% |
| Violences sexuelles | 23 600 | +2,1% |
| Violences économiques | 13 800 | +0,5% |

### Analyse géographique

#### Répartition par région
Les violences conjugales touchent l'ensemble du territoire avec des disparités :

**Régions les plus touchées** :
1. Île-de-France : 18,2% des cas
2. Auvergne-Rhône-Alpes : 12,1%
3. Nouvelle-Aquitaine : 9,8%

**Taux pour 1000 habitants** :
- Zone urbaine : 12,4‰
- Zone périurbaine : 8,7‰
- Zone rurale : 6,2‰

### Profil des victimes

#### Âge des victimes
- **18-25 ans** : 22%
- **26-35 ans** : 31%
- **36-45 ans** : 28%
- **46-55 ans** : 15%
- **Plus de 55 ans** : 4%

#### Situation familiale
> Les femmes avec enfants représentent 68% des victimes, soulignant l'urgence de protéger également les mineurs témoins.

### Actions menées en 2024

#### Dispositifs de protection
- **Téléphones Grave Danger** : 3 200 dispositifs attribués
- **Ordonnances de protection** : 2 890 délivrées
- **Évictions du domicile** : 1 450 mesures

#### Formation des forces de l'ordre
- **Agents formés** : 12 500 policiers et gendarmes
- **Modules spécialisés** : Accueil, écoute, procédures
- **Partenariats** : Associations spécialisées

### Mesures gouvernementales

#### Grenelle de 2019 : un bilan
Depuis le Grenelle contre les violences conjugales :
- **Budget alloué** : 1,9 milliard d'euros
- **Places d'hébergement** : +40%
- **Intervenants sociaux** : +35%

#### Nouvelles mesures 2025
1. **Bracelet anti-rapprochement** étendu
2. **Numéro 3919** renforcé 24h/24
3. **Formation magistrats** intensifiée

### Prévention et sensibilisation

#### Campagnes nationales
- **"Que dit la loi ?"** : 15 millions de vues
- **Spots radio/TV** : Diffusion renforcée
- **Réseaux sociaux** : Contenus adaptés aux jeunes

#### Partenariats
Collaboration renforcée avec :
- Fédération Nationale Solidarité Femmes
- Centre Hubertine Auclert
- Collectivités territoriales

### Témoignage ministériel

**Déclaration du ministre** :
*"Ces chiffres nous rappellent que la lutte contre les violences conjugales reste une priorité absolue. Chaque victime doit pouvoir compter sur la protection de l'État."*

### Numéros d'urgence

- **3919** : Violences Femmes Info (gratuit, anonyme)
- **17** : Police/Gendarmerie (urgence)
- **116 006** : Victimes (aide et soutien)
- **Chat en ligne** : arretonslesviolences.gouv.fr

### Conclusion

Malgré une stabilisation des chiffres, la mobilisation doit se poursuivre. L'objectif reste une diminution significative de ces violences inacceptables.

---

*Source : Observatoire National de la Délinquance et des Réponses Pénales - Rapport 2024*`
  },
  {
    id: '3',
    slug: 'plan-securite-ministere-2025',
    title: 'Plan de sécurité renforcé pour 2025',
    excerpt: 'Le ministère de l\'Intérieur dévoile son nouveau plan de sécurité avec des mesures innovantes pour renforcer la protection des citoyens.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop&ixlib=rb-4.0.3',
    date: '2025-10-20',
    category: 'communique',
    theme: 'securite',
    author: 'Cabinet du Ministre',
    tags: ['sécurité', 'plan', '2025', 'innovation'],
    content: `# Plan de sécurité renforcé pour 2025

## Une approche innovante de la sécurité

Le ministère de l'Intérieur présente son **Plan Sécurité 2025**, fruit d'une concertation de six mois avec les acteurs du terrain et les citoyens.

### Les axes prioritaires

#### 1. Sécurité de proximité
- Renforcement des effectifs de police municipale
- Création de 50 nouvelles brigades de proximité
- Extension des horaires d'ouverture des commissariats

#### 2. Innovation technologique
- Déploiement de la vidéoprotection intelligente
- Application mobile "Sécurité Citoyenne"
- Drones de surveillance dans les zones sensibles

#### 3. Prévention jeunesse
- Programme "Sport et Citoyenneté" dans 200 quartiers
- Médiateurs de rue formés aux nouvelles problématiques
- Partenariats éducatifs renforcés

### Budget et moyens

**Enveloppe totale** : 2,3 milliards d'euros
- Équipements : 40%
- Personnel : 35%
- Formation : 15%
- Innovation : 10%

---

*Mise en œuvre dès janvier 2025*`
  },
  {
    id: '4',
    slug: 'cooperation-internationale-police',
    title: 'Renforcement de la coopération policière internationale',
    excerpt: 'Signature d\'accords bilatéraux avec trois pays africains pour lutter contre la criminalité transfrontalière.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop&ixlib=rb-4.0.3',
    date: '2025-10-18',
    category: 'actualites',
    theme: 'international',
    author: 'Direction des Relations Internationales',
    tags: ['coopération', 'international', 'police', 'afrique'],
    content: `# Coopération policière internationale renforcée

## Des partenariats stratégiques

Le ministère de l'Intérieur a signé cette semaine trois **accords de coopération policière** avec le Sénégal, la Côte d'Ivoire et le Maroc.

### Objectifs des accords

#### Lutte contre la criminalité organisée
- Échange d'informations en temps réel
- Opérations conjointes
- Formation mutuelle des enquêteurs

#### Sécurité aux frontières
- Contrôles coordonnés
- Technologies partagées
- Bases de données communes

### Formation et échanges

**Programme 2025-2027** :
- 120 stagiaires accueillis en France
- 80 experts français en mission
- 15 formations spécialisées

---

*Un renforcement nécessaire face aux défis sécuritaires contemporains*`
  }
];

export const categories = [
  { id: 'actualites', label: 'Actualités du ministre', description: 'Dernières nouvelles et annonces officielles' },
  { id: 'communique', label: 'Communiqués de presse', description: 'Communications officielles du ministère' },
  { id: 'ceremonie', label: 'Cérémonies', description: 'Événements et cérémonies officielles' },
  { id: 'visite', label: 'Visites officielles', description: 'Déplacements et rencontres du ministre' },
  { id: 'securite', label: 'Sécurité', description: 'Mesures et politiques de sécurité' }
];

export const themes = [
  { id: 'police', label: 'Police', description: 'Actualités des forces de police' },
  { id: 'gendarmerie', label: 'Gendarmerie', description: 'Actualités de la gendarmerie' },
  { id: 'administration', label: 'Administration', description: 'Vie administrative du ministère' },
  { id: 'securite', label: 'Sécurité', description: 'Politiques de sécurité' },
  { id: 'international', label: 'International', description: 'Relations et coopération internationale' }
];

// Helper functions
export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const currentPost = getBlogPost(currentSlug);
  if (!currentPost) return [];

  return blogPosts
    .filter(post =>
      post.slug !== currentSlug &&
      (post.theme === currentPost.theme || post.category === currentPost.category)
    )
    .slice(0, limit);
}

export function filterPosts(
  posts: BlogPost[],
  filters: {
    search?: string;
    category?: string;
    theme?: string;
    period?: 'week' | 'month' | 'year';
    dateFrom?: string;
    dateTo?: string;
  }
): BlogPost[] {
  let filtered = [...posts];

  // Search filter
  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filtered = filtered.filter(post =>
      post.title.toLowerCase().includes(searchLower) ||
      post.excerpt.toLowerCase().includes(searchLower) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
  }

  // Category filter
  if (filters.category) {
    filtered = filtered.filter(post => post.category === filters.category);
  }

  // Theme filter
  if (filters.theme) {
    filtered = filtered.filter(post => post.theme === filters.theme);
  }

  // Period filter
  if (filters.period) {
    const now = new Date();
    const cutoffDate = new Date();

    switch (filters.period) {
      case 'week':
        cutoffDate.setDate(now.getDate() - 7);
        break;
      case 'month':
        cutoffDate.setMonth(now.getMonth() - 1);
        break;
      case 'year':
        cutoffDate.setFullYear(now.getFullYear() - 1);
        break;
    }

    filtered = filtered.filter(post => new Date(post.date) >= cutoffDate);
  }

  // Custom date range
  if (filters.dateFrom) {
    filtered = filtered.filter(post => post.date >= filters.dateFrom!);
  }

  if (filters.dateTo) {
    filtered = filtered.filter(post => post.date <= filters.dateTo!);
  }

  return filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}