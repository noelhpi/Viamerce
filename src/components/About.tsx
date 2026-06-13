import React from "react";
import {Target, Heart, Award} from 'lucide-react';

import { Card } from './ui/card';
import { ScrollAnimationWrapper } from './ScrollAnimationWrapper';

const pillars = [
  {
    icon: Target,
    iconColor: "text-[#00D9FF]",
    title: "Minha Missão",
    description:
      "Capacitar empresas de e-commerce a atingir seu pleno potencial. Acredito em parcerias estratégicas e soluções baseadas em dados para impulsionar o crescimento sustentável.",
  },
  {
    icon: Heart,
    iconColor: "text-[#10B981]",
    title: "Meus Valores",
    description:
      "Confiança, inovação e foco no cliente são os pilares do meu trabalho. Construo relacionamentos duradouros baseados em resultados reais.",
  },
  {
    icon: Award,
    iconColor: "text-[#F59E0B]",
    title: "Minha Experiência",
    description:
      "Sou especialista renomado no setor de e-commerce, com anos de experiência em transformar lojas online em negócios altamente lucrativos.",
  },
];

export function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0F2744] to-[#0A1628]">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimationWrapper>
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-4">
            Sobre Noel Ribeiro
          </h2>
          <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
            Conheça o profissional de e-commerce por trás das soluções que transformam lojas virtuais
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
