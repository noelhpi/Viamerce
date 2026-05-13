import React from "react";
import {Target, Heart, Award} from 'lucide-react';

import { Card } from './ui/card';
import { ScrollAnimationWrapper } from './ScrollAnimationWrapper';

const pillars = [
  {
    icon: Target,
    iconColor: "text-[#00D9FF]",
    title: "Nossa Missão",
    description:
      "Capacitar empresas de e-commerce a atingir seu pleno potencial. Acreditamos em parcerias estratégicas e soluções baseadas em dados para impulsionar o crescimento sustentável.",
  },
  {
    icon: Heart,
    iconColor: "text-[#10B981]",
    title: "Nossos Valores",
    description:
      "Confiança, inovação e foco no cliente são os pilares do nosso trabalho. Construímos relacionamentos duradouros baseados em resultados reais.",
  },
  {
    icon: Award,
    iconColor: "text-[#F59E0B]",
    title: "Nossa Experiência",
    description:
      "Nossa equipe é composta por especialistas no setor de e-commerce, com anos de experiência em transformar lojas online em negócios de sucesso.",
  },
];

export function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0F2744] to-[#0A1628]">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimationWrapper>
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-4">
            Sobre a Viamerce
          </h2>
          <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
            Conheça a empresa por trás das soluções que transformam e-commerces
          </p>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <ScrollAnimationWrapper
                key={pillar.title}
                delay={`duration-${700 + index * 100}`}
              >
                <Card color="cyan" className="p-8">
                  <Icon className={`w-12 h-12 mb-4 ${pillar.iconColor}`} />
                  <h4 className="text-2xl font-bold text-white mb-3">
                    {pillar.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </Card>
              </ScrollAnimationWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
