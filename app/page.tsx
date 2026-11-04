"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { FacilitiesAndRequirementsSection } from "@/components/FacilitiesAndRequirementsSection";
import { MethodologySection } from "@/components/MethodologySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { LocationMapSection } from "@/components/LocationMapSection";
import { IntakeFormSection } from "@/components/IntakeFormSection";
import { Footer } from "@/components/Footer";
import type { PRIMARY_GOALS } from "@/lib/schemas/lead";

type PrimaryGoalType = (typeof PRIMARY_GOALS)[number];

export default function LandingPage() {
  const [selectedGoal, setSelectedGoal] = useState<
    PrimaryGoalType | undefined
  >(undefined);
  const [selectedProgram, setSelectedProgram] = useState<string | undefined>(
    undefined
  );

  const scrollToIntakeForm = () => {
    const formElement = document.getElementById("valoracion");
    formElement?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSelectProgram = (goal: PrimaryGoalType, programTitle: string) => {
    setSelectedGoal(goal);
    setSelectedProgram(programTitle);
    scrollToIntakeForm();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#13261f] text-[#f4f3ee]">
      <Navbar
        onSelectGoal={() => {
          setSelectedProgram(undefined);
        }}
      />

      <main className="flex-1">
        <HeroSection onAgendarClick={scrollToIntakeForm} />

        <ServicesSection onSelectProgram={handleSelectProgram} />

        <FacilitiesAndRequirementsSection
          onRequestInfo={() =>
            handleSelectProgram(
              "Obediencia general",
              "Estancia y Educación Zona Peques (< 8 kg)"
            )
          }
        />

        <MethodologySection />

        <TestimonialsSection />

        <LocationMapSection />

        <IntakeFormSection
          preselectedGoal={selectedGoal}
          preselectedProgram={selectedProgram}
        />
      </main>

      <Footer />
    </div>
  );
}
