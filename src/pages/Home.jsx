import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactsSection } from "../components/ContactsSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      {/* Background effects */}
      <StarBackground />

      {/* Navbar (includes the theme toggle) */}
      <Navbar />

      {/* Main content */}
      <main id="main" className="relative">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactsSection />
      </main>

      <Footer />
    </div>
  );
};
