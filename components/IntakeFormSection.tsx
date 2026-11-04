"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  leadSchema,
  PRIMARY_GOALS,
  DOG_SEX_OPTIONS,
  NEUTERED_OPTIONS,
  type LeadFormData,
} from "@/lib/schemas/lead";
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  Send,
  Shield,
  User,
  Dog,
  Target,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";

interface IntakeFormSectionProps {
  preselectedGoal?: (typeof PRIMARY_GOALS)[number];
  preselectedProgram?: string;
}

export function IntakeFormSection({
  preselectedGoal,
  preselectedProgram,
}: IntakeFormSectionProps) {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [serverMessage, setServerMessage] = useState<string>("");
  const [submittedDogName, setSubmittedDogName] = useState<string>("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      ownerName: "",
      email: "",
      phone: "",
      dogName: "",
      breed: "",
      age: "",
      sex: "Macho",
      neutered: "Sí",
      primaryGoal: "Obediencia general",
      preferredProgram: "",
      additionalDetails: "",
    },
    mode: "onTouched",
  });

  const selectedGoal = watch("primaryGoal");
  const selectedSex = watch("sex");
  const selectedNeutered = watch("neutered");
  const currentProgram = watch("preferredProgram");

  useEffect(() => {
    if (preselectedGoal) {
      setValue("primaryGoal", preselectedGoal, { shouldValidate: true });
    }
    if (preselectedProgram !== undefined) {
      setValue("preferredProgram", preselectedProgram);
    }
  }, [preselectedGoal, preselectedProgram, setValue]);

  const onSubmit = async (data: LeadFormData) => {
    setSubmitStatus("submitting");
    setServerMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setSubmitStatus("error");
        setServerMessage(
          result.message ||
            "No pudimos enviar tu solicitud en este momento. Por favor revisa tus datos e inténtalo de nuevo."
        );
        return;
      }

      setSubmittedDogName(data.dogName);
      setSubmitStatus("success");
      setServerMessage(result.message || "Prospecto registrado exitosamente");
    } catch {
      setSubmitStatus("error");
      setServerMessage(
        "Ocurrió un error de conexión al enviar tu solicitud. Verifica tu conexión a internet e inténtalo nuevamente."
      );
    }
  };

  const handleResetForm = () => {
    reset();
    setSubmitStatus("idle");
    setServerMessage("");
    setSubmittedDogName("");
  };

  return (
    <section
      id="valoracion"
      className="py-20 lg:py-28 bg-[#13261f] text-[#f4f3ee]"
      aria-labelledby="intake-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#7ba28a] bg-[#1b342b] border border-[#2b4f42] px-4 py-1.5 rounded-lg mb-4">
            <Shield className="w-3.5 h-3.5 text-[#7ba28a]" aria-hidden="true" />
            Agenda una Valoración Inicial
          </span>
          <h2
            id="intake-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-wide text-[#f4f3ee]"
          >
            Formulario de Registro y Diagnóstico Canino
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9eaca2] leading-relaxed">
            Cuéntanos sobre tu perrito y lo que te gustaría lograr. Un entrenador
            certificado analizará tu caso y te contactará por WhatsApp en menos
            de 24 horas.
          </p>
        </div>

        {/* Form Container Card (Dark Moss Slate #1b342b) */}
        <div className="bg-[#1b342b] text-[#f4f3ee] rounded-2xl p-6 sm:p-10 shadow-2xl border border-[#2b4f42]">
          {submitStatus === "success" ? (
            <div
              className="py-10 px-4 text-center space-y-6"
              role="status"
              aria-live="polite"
            >
              <div className="w-20 h-20 rounded-2xl bg-[#13261f] border border-[#2b4f42] text-[#7ba28a] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-11 h-11" aria-hidden="true" />
              </div>
              <div className="space-y-2 max-w-lg mx-auto">
                <span className="inline-block text-xs font-bold uppercase tracking-[0.16em] text-[#7ba28a] bg-[#13261f] border border-[#2b4f42] px-3.5 py-1 rounded-md">
                  {serverMessage}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#f4f3ee] tracking-wide">
                  ¡Recibimos el diagnóstico de{" "}
                  <span className="font-serif italic font-normal text-[#c27b38]">
                    {submittedDogName || "tu perrito"}
                  </span>
                  !
                </h3>
                <p className="text-[#9eaca2] text-base leading-relaxed">
                  Nuestro equipo de especialistas en educación y adiestramiento
                  canino ya está revisando la información. Te enviaremos un
                  mensaje por WhatsApp y correo electrónico para confirmar el
                  día y horario de tu{" "}
                  <strong className="text-[#f4f3ee]">Valoración Inicial</strong>.
                </p>
              </div>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="inline-flex items-center gap-2 bg-[#c27b38] hover:bg-[#a86529] text-[#f4f3ee] font-bold text-sm tracking-wide px-6 py-3.5 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c27b38]"
                >
                  <RefreshCw className="w-4 h-4" aria-hidden="true" />
                  Registrar otro perrito
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="space-y-8"
              aria-label="Formulario de registro y diagnóstico canino"
            >
              {/* Preselected Program Banner */}
              {currentProgram && (
                <div className="bg-[#13261f] border border-[#2b4f42] rounded-xl p-4 flex items-center justify-between gap-4">
                  <div className="text-sm text-[#f4f3ee]">
                    <span className="text-[#9eaca2] font-medium">
                      Programa de interés:{" "}
                    </span>
                    <span className="font-bold text-[#7ba28a]">
                      {currentProgram}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setValue("preferredProgram", "")}
                    className="text-xs font-semibold text-[#c27b38] hover:underline"
                  >
                    Cambiar
                  </button>
                </div>
              )}

              {/* Error Alert */}
              {submitStatus === "error" && (
                <div
                  role="alert"
                  className="bg-red-950/60 border border-red-700/60 text-[#f4f3ee] rounded-xl p-4 flex items-start gap-3"
                >
                  <AlertCircle
                    className="w-5 h-5 text-red-400 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div className="text-sm">
                    <p className="font-bold">
                      Hubo un problema al enviar tu registro
                    </p>
                    <p className="mt-0.5 text-red-200">{serverMessage}</p>
                  </div>
                </div>
              )}

              {/* ============================================================ */}
              {/* 1. DATOS DEL DUEÑO */}
              {/* ============================================================ */}
              <fieldset className="space-y-5">
                <legend className="flex items-center gap-2.5 text-lg font-bold tracking-wide text-[#f4f3ee] border-b border-[#2b4f42] pb-3 w-full">
                  <span className="w-8 h-8 rounded-lg bg-[#13261f] border border-[#2b4f42] text-[#7ba28a] flex items-center justify-center">
                    <User className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <span>1. Datos del Dueño</span>
                </legend>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
                  {/* Nombre Completo */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="ownerName"
                      className="block text-sm font-semibold text-[#f4f3ee] mb-1.5"
                    >
                      Nombre completo <span className="text-[#c27b38]">*</span>
                    </label>
                    <input
                      id="ownerName"
                      type="text"
                      autoComplete="name"
                      placeholder="Ej. Alejandro Morales López"
                      aria-invalid={Boolean(errors.ownerName)}
                      aria-describedby={
                        errors.ownerName ? "ownerName-error" : undefined
                      }
                      {...register("ownerName")}
                      className={`w-full rounded-xl border px-4 py-3 text-sm text-[#f4f3ee] placeholder:text-[#9eaca2]/60 focus:outline-none focus:ring-2 transition-colors ${
                        errors.ownerName
                          ? "border-red-500 bg-[#13261f] focus:ring-red-500"
                          : "border-[#2b4f42] bg-[#13261f] focus:border-[#c27b38] focus:ring-[#c27b38]/30"
                      }`}
                    />
                    {errors.ownerName && (
                      <p
                        id="ownerName-error"
                        className="mt-1.5 text-xs font-medium text-red-400"
                      >
                        {errors.ownerName.message}
                      </p>
                    )}
                  </div>

                  {/* Correo Electrónico */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-[#f4f3ee] mb-1.5"
                    >
                      Correo electrónico{" "}
                      <span className="text-[#c27b38]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="ejemplo@correo.com"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      {...register("email")}
                      className={`w-full rounded-xl border px-4 py-3 text-sm text-[#f4f3ee] placeholder:text-[#9eaca2]/60 focus:outline-none focus:ring-2 transition-colors ${
                        errors.email
                          ? "border-red-500 bg-[#13261f] focus:ring-red-500"
                          : "border-[#2b4f42] bg-[#13261f] focus:border-[#c27b38] focus:ring-[#c27b38]/30"
                      }`}
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        className="mt-1.5 text-xs font-medium text-red-400"
                      >
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Teléfono / WhatsApp */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-[#f4f3ee] mb-1.5"
                    >
                      Teléfono / WhatsApp{" "}
                      <span className="text-[#c27b38]">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="Ej. 33 1142 8657"
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      {...register("phone")}
                      className={`w-full rounded-xl border px-4 py-3 text-sm text-[#f4f3ee] placeholder:text-[#9eaca2]/60 focus:outline-none focus:ring-2 transition-colors ${
                        errors.phone
                          ? "border-red-500 bg-[#13261f] focus:ring-red-500"
                          : "border-[#2b4f42] bg-[#13261f] focus:border-[#c27b38] focus:ring-[#c27b38]/30"
                      }`}
                    />
                    {errors.phone && (
                      <p
                        id="phone-error"
                        className="mt-1.5 text-xs font-medium text-red-400"
                      >
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>
              </fieldset>

              {/* ============================================================ */}
              {/* 2. DATOS DE LA MASCOTA */}
              {/* ============================================================ */}
              <fieldset className="space-y-5">
                <legend className="flex items-center gap-2.5 text-lg font-bold tracking-wide text-[#f4f3ee] border-b border-[#2b4f42] pb-3 w-full">
                  <span className="w-8 h-8 rounded-lg bg-[#13261f] border border-[#2b4f42] text-[#7ba28a] flex items-center justify-center">
                    <Dog className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <span>2. Datos de la Mascota</span>
                </legend>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-1">
                  {/* Nombre del perro */}
                  <div>
                    <label
                      htmlFor="dogName"
                      className="block text-sm font-semibold text-[#f4f3ee] mb-1.5"
                    >
                      Nombre del perro{" "}
                      <span className="text-[#c27b38]">*</span>
                    </label>
                    <input
                      id="dogName"
                      type="text"
                      placeholder="Ej. Max, Luna, Balam"
                      aria-invalid={Boolean(errors.dogName)}
                      aria-describedby={
                        errors.dogName ? "dogName-error" : undefined
                      }
                      {...register("dogName")}
                      className={`w-full rounded-xl border px-4 py-3 text-sm text-[#f4f3ee] placeholder:text-[#9eaca2]/60 focus:outline-none focus:ring-2 transition-colors ${
                        errors.dogName
                          ? "border-red-500 bg-[#13261f] focus:ring-red-500"
                          : "border-[#2b4f42] bg-[#13261f] focus:border-[#c27b38] focus:ring-[#c27b38]/30"
                      }`}
                    />
                    {errors.dogName && (
                      <p
                        id="dogName-error"
                        className="mt-1.5 text-xs font-medium text-red-400"
                      >
                        {errors.dogName.message}
                      </p>
                    )}
                  </div>

                  {/* Raza */}
                  <div>
                    <label
                      htmlFor="breed"
                      className="block text-sm font-semibold text-[#f4f3ee] mb-1.5"
                    >
                      Raza <span className="text-[#c27b38]">*</span>
                    </label>
                    <input
                      id="breed"
                      type="text"
                      placeholder="Ej. Mestizo, Golden, Pastor"
                      aria-invalid={Boolean(errors.breed)}
                      aria-describedby={errors.breed ? "breed-error" : undefined}
                      {...register("breed")}
                      className={`w-full rounded-xl border px-4 py-3 text-sm text-[#f4f3ee] placeholder:text-[#9eaca2]/60 focus:outline-none focus:ring-2 transition-colors ${
                        errors.breed
                          ? "border-red-500 bg-[#13261f] focus:ring-red-500"
                          : "border-[#2b4f42] bg-[#13261f] focus:border-[#c27b38] focus:ring-[#c27b38]/30"
                      }`}
                    />
                    {errors.breed && (
                      <p
                        id="breed-error"
                        className="mt-1.5 text-xs font-medium text-red-400"
                      >
                        {errors.breed.message}
                      </p>
                    )}
                  </div>

                  {/* Edad */}
                  <div>
                    <label
                      htmlFor="age"
                      className="block text-sm font-semibold text-[#f4f3ee] mb-1.5"
                    >
                      Edad (años / meses){" "}
                      <span className="text-[#c27b38]">*</span>
                    </label>
                    <input
                      id="age"
                      type="text"
                      placeholder="Ej. 5 meses o 2 años"
                      aria-invalid={Boolean(errors.age)}
                      aria-describedby={errors.age ? "age-error" : undefined}
                      {...register("age")}
                      className={`w-full rounded-xl border px-4 py-3 text-sm text-[#f4f3ee] placeholder:text-[#9eaca2]/60 focus:outline-none focus:ring-2 transition-colors ${
                        errors.age
                          ? "border-red-500 bg-[#13261f] focus:ring-red-500"
                          : "border-[#2b4f42] bg-[#13261f] focus:border-[#c27b38] focus:ring-[#c27b38]/30"
                      }`}
                    />
                    {errors.age && (
                      <p
                        id="age-error"
                        className="mt-1.5 text-xs font-medium text-red-400"
                      >
                        {errors.age.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Sexo y Esterilizado/Castrado */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
                  {/* Sexo */}
                  <div>
                    <span className="block text-sm font-semibold text-[#f4f3ee] mb-2">
                      Sexo <span className="text-[#c27b38]">*</span>
                    </span>
                    <div
                      className="grid grid-cols-2 gap-3"
                      role="radiogroup"
                      aria-label="Sexo del perro"
                    >
                      {DOG_SEX_OPTIONS.map((option) => {
                        const isSelected = selectedSex === option;
                        return (
                          <button
                            key={option}
                            type="button"
                            role="radio"
                            aria-checked={isSelected}
                            onClick={() =>
                              setValue("sex", option, { shouldValidate: true })
                            }
                            className={`py-2.5 px-4 rounded-xl text-sm font-semibold border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c27b38] ${
                              isSelected
                                ? "bg-[#c27b38] text-[#f4f3ee] border-[#c27b38]"
                                : "bg-[#13261f] text-[#9eaca2] border-[#2b4f42] hover:border-[#7ba28a] hover:text-[#f4f3ee]"
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                    {errors.sex && (
                      <p className="mt-1.5 text-xs font-medium text-red-400">
                        {errors.sex.message}
                      </p>
                    )}
                  </div>

                  {/* ¿Esterilizado/Castrado? */}
                  <div>
                    <span className="block text-sm font-semibold text-[#f4f3ee] mb-2">
                      ¿Esterilizado/Castrado?{" "}
                      <span className="text-[#c27b38]">*</span>
                    </span>
                    <div
                      className="grid grid-cols-2 gap-3"
                      role="radiogroup"
                      aria-label="¿Está esterilizado o castrado?"
                    >
                      {NEUTERED_OPTIONS.map((option) => {
                        const isSelected = selectedNeutered === option;
                        return (
                          <button
                            key={option}
                            type="button"
                            role="radio"
                            aria-checked={isSelected}
                            onClick={() =>
                              setValue("neutered", option, {
                                shouldValidate: true,
                              })
                            }
                            className={`py-2.5 px-4 rounded-xl text-sm font-semibold border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c27b38] ${
                              isSelected
                                ? "bg-[#c27b38] text-[#f4f3ee] border-[#c27b38]"
                                : "bg-[#13261f] text-[#9eaca2] border-[#2b4f42] hover:border-[#7ba28a] hover:text-[#f4f3ee]"
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                    {errors.neutered && (
                      <p className="mt-1.5 text-xs font-medium text-red-400">
                        {errors.neutered.message}
                      </p>
                    )}
                  </div>
                </div>
              </fieldset>

              {/* ============================================================ */}
              {/* 3. OBJETIVO PRINCIPAL & DETALLES */}
              {/* ============================================================ */}
              <fieldset className="space-y-5">
                <legend className="flex items-center gap-2.5 text-lg font-bold tracking-wide text-[#f4f3ee] border-b border-[#2b4f42] pb-3 w-full">
                  <span className="w-8 h-8 rounded-lg bg-[#13261f] border border-[#2b4f42] text-[#7ba28a] flex items-center justify-center">
                    <Target className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <span>3. Objetivo Principal y Comportamiento</span>
                </legend>

                {/* Selector / Chips de Objetivo Principal */}
                <div className="pt-1">
                  <label className="block text-sm font-semibold text-[#f4f3ee] mb-2.5">
                    Selecciona el objetivo principal para tu perro{" "}
                    <span className="text-[#c27b38]">*</span>
                  </label>
                  <div
                    className="flex flex-wrap gap-2.5"
                    role="radiogroup"
                    aria-label="Objetivo principal de entrenamiento"
                  >
                    {PRIMARY_GOALS.map((goal) => {
                      const isSelected = selectedGoal === goal;
                      return (
                        <button
                          key={goal}
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          onClick={() =>
                            setValue("primaryGoal", goal, {
                              shouldValidate: true,
                            })
                          }
                          className={`px-4 py-2.5 rounded-xl text-sm font-semibold border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c27b38] ${
                            isSelected
                              ? "bg-[#c27b38] text-[#f4f3ee] border-[#c27b38] shadow-sm"
                              : "bg-[#13261f] text-[#9eaca2] border-[#2b4f42] hover:border-[#7ba28a] hover:text-[#f4f3ee]"
                          }`}
                        >
                          {goal}
                        </button>
                      );
                    })}
                  </div>
                  {errors.primaryGoal && (
                    <p className="mt-1.5 text-xs font-medium text-red-400">
                      {errors.primaryGoal.message}
                    </p>
                  )}
                </div>

                {/* Detalles adicionales */}
                <div>
                  <label
                    htmlFor="additionalDetails"
                    className="block text-sm font-semibold text-[#f4f3ee] mb-1.5"
                  >
                    Detalles adicionales sobre su conducta{" "}
                    <span className="text-[#c27b38]">*</span>
                  </label>
                  <textarea
                    id="additionalDetails"
                    rows={4}
                    placeholder="Cuéntanos qué comportamientos te preocupan, cómo es su rutina diaria o qué te gustaría lograr con su entrenamiento..."
                    aria-invalid={Boolean(errors.additionalDetails)}
                    aria-describedby={
                      errors.additionalDetails
                        ? "additionalDetails-error"
                        : undefined
                    }
                    {...register("additionalDetails")}
                    className={`w-full rounded-xl border px-4 py-3 text-sm text-[#f4f3ee] placeholder:text-[#9eaca2]/60 focus:outline-none focus:ring-2 transition-colors ${
                      errors.additionalDetails
                        ? "border-red-500 bg-[#13261f] focus:ring-red-500"
                        : "border-[#2b4f42] bg-[#13261f] focus:border-[#c27b38] focus:ring-[#c27b38]/30"
                    }`}
                  />
                  {errors.additionalDetails && (
                    <p
                      id="additionalDetails-error"
                      className="mt-1.5 text-xs font-medium text-red-400"
                    >
                      {errors.additionalDetails.message}
                    </p>
                  )}
                </div>
              </fieldset>

              {/* Standardized Saddle Leather Submit Button & Privacy Note */}
              <div className="pt-2 space-y-4">
                <button
                  type="submit"
                  disabled={submitStatus === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-3 bg-[#c27b38] hover:bg-[#a86529] disabled:opacity-60 text-[#f4f3ee] font-bold text-base sm:text-lg tracking-wide px-8 py-4 rounded-xl shadow-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c27b38]"
                >
                  {submitStatus === "submitting" ? (
                    <>
                      <Loader2
                        className="w-5 h-5 animate-spin"
                        aria-hidden="true"
                      />
                      <span>Registrando tu Solicitud de Valoración...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" aria-hidden="true" />
                      <span>Solicitar Valoración Inicial</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-center text-[#9eaca2] flex items-center justify-center gap-1.5">
                  <ShieldCheck
                    className="w-4 h-4 text-[#7ba28a] shrink-0"
                    aria-hidden="true"
                  />
                  <span>
                    Tus datos están protegidos conforme a nuestro Aviso de
                    Privacidad. No enviamos spam.
                  </span>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
