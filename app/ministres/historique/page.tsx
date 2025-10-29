import { Footer } from "@/components/footer";
import { HistoryStats } from "@/components/history/history-stats";
import { MinistersTimeline } from "@/components/history/ministers-timeline";
import { Navbar } from "@/components/navbar";

// Données réelles des ministres de l'intérieur (ordre chronologique inverse : récent → ancien)
const ministersHistory = [
  // Ministre actuel
  {
    id: "1",
    name: "Raymond Zéphirin MBOULOU",
    startYear: 2009,
    endYear: 2024,
    period: "2009 à présent",
    image: "/raymond-zephirin-mboulou.webp",
    isCurrentMinister: true,
  },

  // Anciens ministres (ordre chronologique inverse)
  {
    id: "2",
    name: "Paul MBOT",
    startYear: 2005,
    endYear: 2009,
    period: "2005-2009",
    image: "/paul-mbot.webp",
  },
  {
    id: "3",
    name: "François IBOVI",
    startYear: 2002,
    endYear: 2007,
    period: "2002-2007",
    image: "/francois-ibovi.webp",
  },
  {
    id: "4",
    name: "Pierre OBA",
    startYear: 1997,
    endYear: 2002,
    period: "1997-2002",
    image: "/pierre-oba.webp",
  },
  {
    id: "5",
    name: "Philipe BIKINKITA",
    startYear: 1995,
    endYear: 1997,
    period: "1995-1997",
    image: "/philipe-bikinkita.webp",
  },
  {
    id: "6",
    name: "Martin MBERI",
    startYear: 1993,
    endYear: 1995,
    period: "1993-1995",
    image: "/martin-mberi.webp",
  },
  {
    id: "7",
    name: "François AYAYEN",
    startYear: 1992,
    endYear: 1993,
    period: "1992-1993",
    image: "/francois_ayayen.webp",
  },
  {
    id: "8",
    name: "Martin MBERI",
    startYear: 1992,
    endYear: 1992,
    period: "7 sept.-5 déc. 1992",
    image: "/martin-mberi.webp",
  },
  {
    id: "9",
    name: "Alphonse NZONGOU",
    startYear: 1992,
    endYear: 1992,
    period: "Mai-septembre 1992",
    image: "/alphonse-nzongou.webp",
  },
  {
    id: "10",
    name: "Alexis GABOU",
    startYear: 1991,
    endYear: 1992,
    period: "1991-1992",
    image: "/alexis-gabou.webp",
  },
  {
    id: "11",
    name: "Célestin GOMA FOUTOU",
    startYear: 1989,
    endYear: 1991,
    period: "1989-1991",
    image: "/celestin-goma-foutou.webp",
  },
  {
    id: "12",
    name: "Benoît MONDELE-NGOLO",
    startYear: 1988,
    endYear: 1989,
    period: "1988-1989",
    image: "/benoit-moundele-ngolo.webp",
  },
  {
    id: "13",
    name: "Emmanuel ELENGA",
    startYear: 1987,
    endYear: 1988,
    period: "1987-1988",
    image: "/emmanuel-elenga.webp",
  },
  {
    id: "14",
    name: "Roymond Damase NGOLO",
    startYear: 1984,
    endYear: 1988,
    period: "1984-1988",
    image: "/roymond-damase-ngolo.webp",
  },
  {
    id: "15",
    name: "François Xavier KATALI",
    startYear: 1977,
    endYear: 1984,
    period: "1977-1984",
    image: "/francois-xavier-katali.webp",
  },
  {
    id: "16",
    name: "Louis ZATONGA",
    startYear: 1975,
    endYear: 1977,
    period: "1975-1977",
    image: "/default.webp",
  },
  {
    id: "17",
    name: "Charles Maurice SIANARD",
    startYear: 1973,
    endYear: 1975,
    period: "1973-1975",
    image: "/default.webp",
  },
  {
    id: "18",
    name: "Marien NGOUABI",
    startYear: 1971,
    endYear: 1973,
    period: "1971-1973",
    image: "/default.webp",
  },
  {
    id: "19",
    name: "Dieudonné ITOUA",
    startYear: 1970,
    endYear: 1971,
    period: "1970-1971",
    image: "/dieudonne-itoua.webp",
  },
  {
    id: "20",
    name: "Alfred RAOUL",
    startYear: 1968,
    endYear: 1970,
    period: "1968-1970",
    image: "/default.webp",
  },
  {
    id: "21",
    name: "Félix MOUZABAKANI",
    startYear: 1968,
    endYear: 1968,
    period: "6 août-15 oct. 1968",
    image: "/default.webp",
  },
  {
    id: "22",
    name: "Michel BINDI",
    startYear: 1968,
    endYear: 1968,
    period: "12-5 août 1968",
    image: "/default.webp",
  },
  {
    id: "23",
    name: "André HOMBESSA",
    startYear: 1965,
    endYear: 1968,
    period: "1965-1968",
    image: "/default.webp",
  },
  {
    id: "24",
    name: "Germain BICOUMAT",
    startYear: 1963,
    endYear: 1965,
    period: "1963-1965",
    image: "/default.webp",
  },
  {
    id: "25",
    name: "Abbé Fulbert YOULOU",
    startYear: 1962,
    endYear: 1963,
    period: "1962-1963",
    image: "/default.webp",
  },
  {
    id: "26",
    name: "Dominique NZALAKANDA",
    startYear: 1961,
    endYear: 1962,
    period: "1961-1962",
    image: "/default.webp",
  },
  {
    id: "27",
    name: "Stéphane TCHITCHELLE",
    startYear: 1958,
    endYear: 1961,
    period: "1958-1961",
    image: "/default.webp",
  },
];

// Calcul des statistiques
const currentYear = new Date().getFullYear();
const yearsSinceIndependence = currentYear - 1960;
const totalMinisters = ministersHistory.length;

// Calcul de la durée moyenne
const totalYears = ministersHistory.reduce((total, minister) => {
  const endYear =
    minister.endYear === currentYear ? currentYear : minister.endYear;
  return total + (endYear - minister.startYear);
}, 0);
const averageTenure =
  Math.round((totalYears / totalMinisters) * 10) / 10 + " ans";

// Plus long mandat
const longestTenure = ministersHistory.reduce((longest, minister) => {
  const duration = minister.endYear - minister.startYear;
  const longestDuration = longest.endYear - longest.startYear;
  return duration > longestDuration ? minister : longest;
});

const statsData = {
  totalMinisters,
  yearsSinceIndependence,
  averageTenure,
  longestTenure: {
    name: longestTenure.name,
    duration: longestTenure.endYear - longestTenure.startYear + " ans",
  },
};

export default function MinistersHistoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Section Statistiques */}
        <HistoryStats {...statsData} />

        {/* Section Timeline */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <MinistersTimeline ministers={ministersHistory} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
