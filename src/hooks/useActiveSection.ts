import { useEffect, useState } from "react";

import { SECTION_IDS, SectionId } from "../constants/navigation";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection: SectionId = "home";

      for (const section of SECTION_IDS) {
        const element = document.getElementById(section);

        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= 250 && rect.bottom >= 250) {
          currentSection = section;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSection;
}
