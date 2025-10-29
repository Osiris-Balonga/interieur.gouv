import { Footer } from "@/components/footer";
import { MinisterCabinet } from "@/components/minister/minister-cabinet";
import { MinisterCareer } from "@/components/minister/minister-career";
import { MinisterHero } from "@/components/minister/minister-hero";
import { Navbar } from "@/components/navbar";

// Données du ministre de l'intérieur
const ministerData = {
  name: "Raymond Zéphirin MBOULOU",
  title: "Ministre de l'intérieur",
  image: "/raymond-zephirin-mboulou.webp",
  biography:
    "Raymond Zéphirin Mboulou est ministre de l'intérieur de la République du Congo. Diplômé en administration publique et en sciences politiques, il a consacré sa carrière au service de l'État et au développement de l'administration territoriale congolaise. Il a occupé de nombreux postes de responsabilité au sein de l'administration publique avant d'être nommé à la tête du ministère de l'Intérieur.",
  socialLinks: {
    twitter: "#",
    linkedin: "#",
    instagram: "#",
  },
};

const careerData = [
  {
    year: "2021",
    position: "Ministre de l'intérieur",
    description:
      "Nomination au poste de ministre de l'Intérieur de la République du Congo",
  },
  {
    year: "2018-2021",
    position: "Secrétaire général du ministère de l'Intérieur",
    description: "Direction de l'administration centrale du ministère",
  },
  {
    year: "2015-2018",
    position: "Directeur de cabinet du ministre de l'Intérieur",
    description: "Coordination des activités du cabinet ministériel",
  },
  {
    year: "2012-2015",
    position: "Préfet du département de la Bouenza",
    description: "Administration territoriale déconcentrée",
  },
  {
    year: "2009-2012",
    position: "Sous-préfet de Madingou",
    description: "Administration locale et développement territorial",
  },
  {
    year: "2006-2009",
    position:
      "Chef de service à la direction générale de l'administration territoriale",
    description: "Gestion des collectivités locales",
  },
  {
    year: "2003-2006",
    position: "Attaché d'administration centrale",
    description: "Ministère de l'Administration territoriale",
  },
  {
    year: "2001-2003",
    position: "Conseiller technique au cabinet du ministre",
    description: "Appui technique et conseil en politiques publiques",
  },
];

const cabinetData = [
  {
    name: "Jean-Claude MABIALA",
    position: "Directeur du cabinet",
    appointmentType: "JO du",
    appointmentDate: "15/06/2021",
  },
  {
    name: "Marie-Thérèse NGANGA",
    position: "Directrice adjointe du cabinet",
    appointmentType: "JO du",
    appointmentDate: "15/06/2021",
  },
  {
    name: "Dieudonné BAKALA",
    position: "Directeur adjoint du cabinet",
    appointmentType: "JO du",
    appointmentDate: "15/06/2021",
  },
  {
    name: "Sylvie MOUKASSA",
    position: "Cheffe de cabinet",
    appointmentType: "JO du",
    appointmentDate: "15/06/2021",
  },
  {
    name: "Emmanuel KONGO",
    position: "Chef adjoint de cabinet",
    appointmentType: "JO du",
    appointmentDate: "15/06/2021",
  },
  {
    name: "Béatrice MBEMBA",
    position: "Conseillère communication",
    appointmentType: "JO du",
    appointmentDate: "15/06/2021",
  },
  {
    name: "Hervé ONDONGO",
    position: "Conseiller parlementaire et élus",
    appointmentType: "JO du",
    appointmentDate: "15/06/2021",
  },
  {
    name: "Célestine LOUKABOU",
    position: "Conseillère discours",
    appointmentType: "JO du",
    appointmentDate: "15/06/2021",
  },
  {
    name: "Norbert MAKOSSO",
    position: "Conseiller diplomatique",
    appointmentType: "JO du",
    appointmentDate: "15/06/2021",
  },
  {
    name: "Antoinette NGAKALA",
    position: "Conseillère justice et affaires pénales",
    appointmentType: "JO du",
    appointmentDate: "15/06/2021",
  },
  {
    name: "Rodrigue BININGA",
    position: "Conseiller budgétaire, chargé de la modernisation du ministère",
    appointmentType: "JO du",
    appointmentDate: "15/06/2021",
  },
  {
    name: "Francine NSIMBA",
    position: "Conseillère immigration et cultes",
    appointmentType: "JO du",
    appointmentDate: "15/06/2021",
  },
  {
    name: "Urbain MILANDOU",
    position:
      "Conseiller libertés publiques, administration territoriale et élections",
    appointmentType: "JO du",
    appointmentDate: "15/06/2021",
  },
];

export default function MinisterInteriorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <MinisterHero
          name={ministerData.name}
          title={ministerData.title}
          image={ministerData.image}
          biography={ministerData.biography}
          socialLinks={ministerData.socialLinks}
        />

        <MinisterCareer career={careerData} />

        <MinisterCabinet cabinetMembers={cabinetData} />
      </main>

      <Footer />
    </div>
  );
}
