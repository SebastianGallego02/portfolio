'use client'

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Journey } from "@/components/Journey";
import { CardFlip } from "@/components/CardFlip";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleSectionSelect = (section: string) => {
    setActiveSection(section);
  };

  const handleBack = () => {
    setActiveSection(null);
  };

  const renderBackContent = () => {
    switch (activeSection) {
      case "projects":
        return <Projects onBack={handleBack} />;
      case "about":
        return <About onBack={handleBack} />;
      case "skills":
        return <Skills onBack={handleBack} />;
      case "journey":
        return <Journey onBack={handleBack} />;
      case "contact":
        return <Contact onBack={handleBack} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Navigation onSectionSelect={handleSectionSelect}/>
      <CardFlip
        isFlipped={activeSection !== null}
        frontContent={<Hero onSectionSelect={handleSectionSelect} />}
        backContent={renderBackContent()}
      />
      <Toaster position="bottom-right" theme="dark" />
    </>
  );
}

