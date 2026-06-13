import React from "react";
import {GraduationCap, Award, Briefcase, MessageCircleDashed as MessageCircle, ArrowRight} from 'lucide-react';
import { ScrollAnimationWrapper } from './ScrollAnimationWrapper';

export function Consultant() {
  const whatsappUrl =
    "https://wa.me/5534984441801?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20setup%20e%20treinamento%20de%20e-commerce.";

  const credentials = [
    {
      icon: <GraduationCap className="w-5 h-5 text-[#00D9FF]" />,
      label: "Formado em Gestão Comercial",
    },
    {
      icon: <Award className="w-5 h-5 text-[#00D9FF]" />,
      label: "Pós-graduado em E-commerce",
    },
    {
      icon: <Briefcase className="w-5 h-5 text-[#00D9FF]" />,
      label: "Formação ComSchool: Marketing Digital e Gerente de E-commerce 4.0",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#00D9FF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#10B981]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <ScrollAnimationWrapper>
          {/* Section heading */}
          <div className="text-center mb-12">
            <p className="text-[#00D9FF] font-semibold text-base tracking-wide mb-2">
              Conheça o Especialista
            </p>
            <h2 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight">
              Noel Ribeiro
            </h2>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay="duration-700">
          {/* Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          {/* Photo side */}
          <div className="bg-[#0A1628]/80 flex items-stretch min-h-[340px]">
            <img
              src="https://static.lumi.new/d0/d05b582fd0672effbb05310ec56d769d.webp"
              alt="Foto de Noel Ribeiro"
              className="w-full h-full object-cover object-center"
              style={{ minHeight: "340px" }}
            />
          </div>

          {/* Info side */}
          <div className="bg-[#0D1F38]/90 p-8 sm:p-10 flex flex-col justify-center gap-6">
            <div>
              <h3 className="text-[#00D9FF] font-bold text-lg mb-2">
                Especialista em E-commerce
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Mais de 5 anos de experiência atuando no setor de e-commerce com foco em
                estratégias de crescimento.
              </p>
            </div>

            {/* Credentials */}
            <ul className="flex flex-col gap-4">
              {credentials.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/20">
                    {item.icon}
                  </span>
                  <span className="text-white font-medium text-sm leading-snug">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-2 inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full text-base font-bold hover:bg-[#1ebe57] transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] self-start btn-shine cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              Fale com o Especialista
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </ScrollAnimationWrapper>
    </div>
  </section>
  );
}
