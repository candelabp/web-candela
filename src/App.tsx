import { FormEvent, useCallback, useMemo, useState } from "react";
import { AnimatePresence } from "motion/react";

import { PROJECTS } from "./data";
import { Project } from "./types";
import AppBackground from "./components/layout/AppBackground";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import ProjectModal from "./components/ProjectModal";
import AboutSection from "./components/sections/AboutSection";
import ContactSection, { SentMessage } from "./components/sections/ContactSection";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import SkillsSection from "./components/sections/SkillsSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import { useActiveSection } from "./hooks/useActiveSection";
import { useBreathingGuide } from "./hooks/useBreathingGuide";
import { useHeroParallax } from "./hooks/useHeroParallax";
import { useMadridAvailability } from "./hooks/useMadridAvailability";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

export default function App() {
  const activeSection = useActiveSection();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollToSection = useSmoothScroll(() => setMobileMenuOpen(false));

  const [projectFilter, setProjectFilter] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const { heroRef, mouseOffset, handleHeroMouseMove, handleHeroMouseLeave } = useHeroParallax();
  const { isBreathing, breathPhase, breathCounter, toggleBreathing } = useBreathingGuide();
  const { madridTime, availabilityMessage } = useMadridAvailability();

  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [sentMessages, setSentMessages] = useState<SentMessage[]>([]);

  const filteredProjects = useMemo(() => {
    const normalizedSearch = searchQuery.toLowerCase();

    return PROJECTS.filter((project) => {
      const matchesCategory = projectFilter === "Todos" || project.category === projectFilter;
      const matchesSearch =
        project.title.toLowerCase().includes(normalizedSearch) ||
        project.tags.some((tag) => tag.toLowerCase().includes(normalizedSearch)) ||
        project.category.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [projectFilter, searchQuery]);

  const handleTechSelect = useCallback(
    (tech: string) => {
      setProjectFilter("Todos");
      setSearchQuery(tech);
      scrollToSection("projects");
    },
    [scrollToSection],
  );

  const resetProjectFilters = () => {
    setProjectFilter("Todos");
    setSearchQuery("");
  };

  const handleContactSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) return;

    const newMessage = {
      name: contactName,
      msg: contactMessage,
      date: new Date().toLocaleDateString("es-ES", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setSentMessages((currentMessages) => [newMessage, ...currentMessages]);
    setFormSubmitted(true);
    setContactMessage("");
  };

  return (
    <div className="bg-background text-on-surface font-sans selection:bg-secondary-fixed selection:text-on-secondary-fixed relative min-h-screen overflow-x-hidden">
      <AppBackground />

      <Header
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen((isOpen) => !isOpen)}
        onNavigate={scrollToSection}
      />

      <main className="relative z-10 pt-28">
        <HeroSection
          heroRef={heroRef}
          mouseOffset={mouseOffset}
          onMouseMove={handleHeroMouseMove}
          onMouseLeave={handleHeroMouseLeave}
          onTechSelect={handleTechSelect}
        />

        <AboutSection
          isBreathing={isBreathing}
          breathPhase={breathPhase}
          breathCounter={breathCounter}
          onToggleBreathing={toggleBreathing}
        />

        <ProjectsSection
          projects={filteredProjects}
          projectFilter={projectFilter}
          searchQuery={searchQuery}
          onFilterChange={setProjectFilter}
          onSearchChange={setSearchQuery}
          onProjectSelect={setSelectedProject}
          onResetFilters={resetProjectFilters}
        />

        <SkillsSection />
        {/* <TestimonialsSection />

        <ContactSection
          contactName={contactName}
          contactEmail={contactEmail}
          contactMessage={contactMessage}
          formSubmitted={formSubmitted}
          sentMessages={sentMessages}
          madridTime={madridTime}
          availabilityMessage={availabilityMessage}
          onNameChange={setContactName}
          onEmailChange={setContactEmail}
          onMessageChange={setContactMessage}
          onSubmit={handleContactSubmit}
          onResetForm={() => setFormSubmitted(false)}
        /> */}
      </main>

      <Footer />

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
