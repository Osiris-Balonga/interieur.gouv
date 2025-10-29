import { Footer } from "@/components/footer";
import { MinisterCabinet } from "@/components/minister/minister-cabinet";
import { MinisterCareer } from "@/components/minister/minister-career";
import { MinisterHero } from "@/components/minister/minister-hero";
import { Navbar } from "@/components/navbar";

// Données du ministre délégué
const ministerData = {
  name: "Claudine MUNARI",
  title: "Ministre déléguée auprès du ministre de l'intérieur",
  image: "/claudine-munari.webp",
  biography:
    "Claudine Munari est ministre déléguée auprès du ministre de l'intérieur de la République du Congo. Femme politique et administratrice expérimentée, elle a consacré sa carrière au service public et au développement des institutions démocratiques congolaises. Diplômée en droit public et en administration, elle a occupé de nombreux postes de responsabilité avant d'être nommée à ce poste stratégique.",
  socialLinks: {
    twitter: "#",
    linkedin: "#",
    instagram: "#",
  },
};

const careerData = [
  {
    year: "2022",
    position: "Ministre déléguée auprès du ministre de l'intérieur",
    description: "Nomination au poste de ministre déléguée",
  },
  {
    year: "2019-2022",
    position: "Secrétaire générale de la préfecture de Brazzaville",
    description: "Direction administrative de la préfecture de la capitale",
  },
  {
    year: "2016-2019",
    position: "Directrice des collectivités locales",
    description:
      "Ministère de l'Administration territoriale et de la Décentralisation",
  },
  {
    year: "2013-2016",
    position: "Sous-préfète de Pointe-Noire",
    description: "Administration territoriale de la capitale économique",
  },
  {
    year: "2010-2013",
    position: "Cheffe de cabinet du préfet du Kouilou",
    description: "Coordination des activités préfectorales",
  },
  {
    year: "2007-2010",
    position: "Conseillère technique au ministère de l'Intérieur",
    description: "Appui technique en politiques publiques",
  },
  {
    year: "2004-2007",
    position: "Attachée d'administration centrale",
    description: "Administration centrale du ministère de l'Intérieur",
  },
  {
    year: "2002-2004",
    position: "Auditrice à l'École nationale d'administration du Congo",
    description: "Formation en administration publique",
  },
];

const cabinetData = [
  {
    name: "Jean-Pierre MAKAYA",
    position: "Directeur du cabinet",
    appointmentType: "Nomination",
    appointmentDate: "25/01/2023",
  },
  {
    name: "Sylvie NKOUKA",
    position: "Directrice adjointe du cabinet",
    appointmentType: "Nomination",
    appointmentDate: "25/01/2023",
  },
  {
    name: "Paul MBEMBA",
    position: "Chef de cabinet",
    appointmentType: "Nomination",
    appointmentDate: "25/01/2023",
  },
  {
    name: "Françoise LOEMBA",
    position: "Cheffe adjointe de cabinet",
    appointmentType: "Nomination",
    appointmentDate: "25/01/2023",
  },
  {
    name: "David KOUKA",
    position: "Conseiller affaires territoriales",
    appointmentType: "Nomination",
    appointmentDate: "25/01/2023",
  },
  {
    name: "Georgette KIMBEMBÉ",
    position: "Conseillère communication",
    appointmentType: "Nomination",
    appointmentDate: "25/01/2023",
  },
  {
    name: "Robert NGOUABI",
    position: "Conseiller juridique",
    appointmentType: "Nomination",
    appointmentDate: "25/01/2023",
  },
  {
    name: "Claudine MASSAMBA",
    position: "Conseillère développement local",
    appointmentType: "Nomination",
    appointmentDate: "25/01/2023",
  },
  {
    name: "Marcel OKABANDO",
    position: "Conseiller sécurité publique",
    appointmentType: "Nomination",
    appointmentDate: "25/01/2023",
  },
  {
    name: "Bernadette NIMI",
    position: "Conseillère relations institutionnelles",
    appointmentType: "Nomination",
    appointmentDate: "25/01/2023",
  },
  {
    name: "Thierry MOUBAMBA",
    position: "Conseiller budget et finances",
    appointmentType: "Nomination",
    appointmentDate: "25/01/2023",
  },
  {
    name: "Yvonne MAKOSSO",
    position: "Conseillère ressources humaines",
    appointmentType: "Nomination",
    appointmentDate: "25/01/2023",
  },
];

export default function MinisterDelegatePage() {
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
