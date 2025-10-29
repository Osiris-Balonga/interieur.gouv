import { Navbar } from "@/components/navbar"
import { HeroArticles } from "@/components/sections/hero-articles"
import { UserServices } from "@/components/sections/user-services"
import { AdministrativeProcedures } from "@/components/sections/administrative-procedures"
import { MinistryMissions } from "@/components/sections/ministry-missions"
import { Ministers } from "@/components/sections/ministers"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/ui/page-transition"

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        <main>
          <HeroArticles />
          <UserServices />
          <AdministrativeProcedures />
          <MinistryMissions />
          <Ministers />
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
}
