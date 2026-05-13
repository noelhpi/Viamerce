import React from "react";
import {CheckCircle} from 'lucide-react';
import { Card } from './ui/card';
import { ScrollAnimationWrapper } from './ScrollAnimationWrapper';

const benefits = [
  "Aumento da taxa de conversão e fidelização",
  "Redução de abandono de carrinho",
  "Fortalecimento da marca e posicionamento digital",
  "Eficiência operacional e escalabilidade",
];

export function Benefits() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0F2744] to-[#0A1628]">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimationWrapper>
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-4">
            Benefícios da Consultoria
          </h2>
          <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
            Resultados reais para o crescimento sustentável do seu negócio
          </p>
        </ScrollAnimationWrapper>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <ScrollAnimationWrapper
              key={benefit}
              delay={`duration-${700 + index * 100}`}
            >
              <Card color="green" className="p-6">
                <CheckCircle className="w-10 h-10 text-[#10B981] mb-4" />
                <p className="text-white font-semibold text-lg leading-snug">
                  {benefit}
                </p>
              </Card>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
