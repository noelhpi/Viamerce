import React, { useState } from "react";
import { 
  Check, 
  HelpCircle, 
  Sparkles, 
  ShieldCheck, 
  MessageCircle, 
  ArrowRight,
  ChevronDown,
  Info 
} from "lucide-react";
import { ScrollAnimationWrapper } from "./ScrollAnimationWrapper";
import { Card } from "./ui/card";

interface PricingTier {
  name: string;
  badge?: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  ctaText: string;
  whatsappMessage: string;
  color: "cyan" | "green" | "amber" | "rose" | "indigo";
  popular?: boolean;
}

export function PricingPlans() {
  const [billingPeriod, setBillingPeriod] = useState<"project" | "custom">("project");

  const plans: PricingTier[] = [
    {
      name: "Presença Essencial",
      badge: "Mais Econômico",
      description: "Ideal para pequenos comércios locais começarem de forma profissional na internet do zero.",
      price: "1.190",
      period: "projeto único",
      color: "cyan",
      features: [
        "Registro e gestão profissional de Domínio (ex: .com.br)",
        "Configuração de Servidor rápido e seguro",
        "Site Institucional básico (História, Serviços, Contatos)",
        "Criação e otimização do perfil Google Meu Negócio / Maps",
        "Acesso à palestra digital gravada sobre Vendas Locais",
        "Configuração técnica de apontamento DNS"
      ],
      ctaText: "Iniciar Setup Essencial",
      whatsappMessage: "Olá Noel! Gostaria de falar sobre o plano de serviços Presença Essencial para o meu negócio."
    },
    {
      name: "Loja Completa e Operação",
      badge: "Mais Vendido",
      popular: true,
      description: "A solução completa para estruturar sua loja virtual de alta performance integrada com estoques.",
      price: "2.890",
      period: "projeto único",
      color: "green",
      features: [
        "Tudo incluído no plano Presença Essencial",
        "Desenvolvimento de E-commerce moderno (Nuvemshop/Shopify)",
        "Gateways de Pagamento seguros (Pix, Parcelados)",
        "Integração de ERP e HUB (Bling) para controle de estoque automático",
        "Configuração completa de Correios / Melhor Envio (Fretes)",
        "Instalação de Pixel (Meta, Google) + Google Analytics",
        "Treinamento Prático da sua equipe para operar a loja"
      ],
      ctaText: "Construir Minha Loja",
      whatsappMessage: "Olá Noel! Fiquei muito interessado no plano Loja Completa e Operação para começar minhas vendas online."
    },
    {
      name: "Aceleração e Mentoria",
      badge: "Resultados Máximos",
      description: "Parceria de mentoria operacional e suporte continuado para otimizações de tráfego, vendas e expansão nacional.",
      price: "1.590",
      period: "mês (mínimo de 3 meses)",
      color: "indigo",
      features: [
        "Tudo incluído nos planos anteriores",
        "Integração do e-commerce nos maiores Marketplaces",
        "Ativação do canal TikTok Shopping",
        "Análise mensal de dados pelo Google Analytics e GTM",
        "Acompanhamento e ajustes de SEO recorrentes para o Google",
        "Estruturação de processos e logística avançada (NPS)",
        "Encontro de mentoria individual a cada 15 dias com o Noel"
      ],
      ctaText: "Quero Mentoria e Escala",
      whatsappMessage: "Olá Noel! Quero saber mais detalhes sobre o plano Aceleração e Mentoria para impulsionar minhas vendas."
    }
  ];

  // Customizable Custom Services selection for custom budgets
  const [selectedCustomServices, setSelectedCustomServices] = useState<string[]>([]);

  const handleToggleCustomService = (serviceName: string) => {
    if (selectedCustomServices.includes(serviceName)) {
      setSelectedCustomServices(selectedCustomServices.filter(item => item !== serviceName));
    } else {
      setSelectedCustomServices([...selectedCustomServices, serviceName]);
    }
  };

  const customServiceOptions = [
    { name: "Identidade Digital (Domínio e DNS)", basePrice: "R$ 250,00" },
    { name: "Servidores e Cloud Hosting Pro", basePrice: "R$ 490,00" },
    { name: "Desenvolvimento de Site ou Loja Virtual", basePrice: "R$ 1.990,00" },
    { name: "Configuração de Plataforma de E-commerce", basePrice: "R$ 1.190,00" },
    { name: "Integração com Grandes Marketplaces", basePrice: "R$ 890,00" },
    { name: "Canais Locais e Sociais (iFood e TikTok)", basePrice: "R$ 690,00" },
    { name: "SEO (Posicionamento Orgânico no Google)", basePrice: "R$ 790,00" },
    { name: "Pixels de Rastreamento (Meta, Google e GTM)", basePrice: "R$ 490,00" },
    { name: "Google Meu Negócio e Analytics Avançado", basePrice: "R$ 450,00" },
    { name: "Processamento de Pagamentos e Checkout", basePrice: "R$ 400,00" },
    { name: "Logística Avançada e Estrutura de Frete", basePrice: "R$ 550,00" },
    { name: "Gestão Unificada via ERP e HUB (Bling)", basePrice: "R$ 790,00" },
    { name: "Palestra Estratégica Presencial/Online", basePrice: "R$ 1.500,00" },
    { name: "Treinamentos Operacionais de Equipe", basePrice: "R$ 790,00" },
    { name: "Mentorias e Oficinas Práticas Individuais", basePrice: "R$ 1.200,00" }
  ];

  // Helper to trigger custom WhatsApp quote
  const handleCustomQuoteSubmit = () => {
    if (selectedCustomServices.length === 0) {
      window.open("https://wa.me/5534984441801?text=Olá Noel! Gostaria de um orçamento personalizado para o meu negócio local.", "_blank");
      return;
    }
    const servicesText = selectedCustomServices.map(s => `- ${s}`).join("%0A");
    const message = `Olá Noel! Gostaria de solicitar um orçamento personalizado para os seguintes serviços que escolhi no site:%0A%0A${servicesText}%0A%0APoderia entrar em contato para conversarmos sobre?`;
    window.open(`https://wa.me/5534984441801?text=${message}`, "_blank");
  };

  return (
    <section id="planos" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden text-foreground">
      {/* Background Ornaments */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollAnimationWrapper>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-6xl font-bold tracking-tight text-white mb-4">Investimento e Planos</h2>
            <h3 className="text-2xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">Valores Ajustados para Negócios Locais</h3>
            <p className="text-gray-400 text-base sm:text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
              Trago propostas totalmente alinhadas com a realidade do mercado brasileiro, oferecendo alta performance técnica, acompanhamento pessoal e retorno real do seu investimento.
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Pricing Toggle View */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="bg-white/[0.03] border border-white/10 p-1 rounded-2xl flex items-center">
            <button
              onClick={() => setBillingPeriod("project")}
              className={`px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                billingPeriod === "project" 
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Planos Fechados / Projetos
            </button>
            <button
              onClick={() => setBillingPeriod("custom")}
              className={`px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                billingPeriod === "custom" 
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Orçamento Sob Medida / Avulsos
            </button>
          </div>
        </div>

        {billingPeriod === "project" ? (
          /* PROJECT-BASED PLAN CARDS */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
            {plans.map((plan, idx) => {
              const borderStyles = plan.popular 
                ? "border-emerald-500/35 bg-[#10b981]/5 shadow-[0_0_50px_rgba(16,185,129,0.08)] scale-[1.01] relative z-20" 
                : "border-white/5 bg-white/[0.01]";

              const accentColor = 
                plan.color === "cyan" ? "text-cyan-400" : 
                plan.color === "green" ? "text-emerald-400" : 
                "text-indigo-400";

              return (
                <ScrollAnimationWrapper 
                  key={plan.name}
                  delay={`duration-${600 + idx * 100}`}
                  className="h-full"
                >
                  <Card 
                    color={plan.color}
                    className={`flex flex-col h-full p-6 sm:p-10 hover:scale-[1.02] transition-all duration-500 ${borderStyles} rounded-3xl overflow-hidden`}
                  >
                    {/* Badge */}
                    {plan.badge && (
                      <div className="flex justify-between items-center mb-6">
                        <span className={`px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full ${
                          plan.popular 
                            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" 
                            : "bg-white/10 text-white"
                        }`}>
                          {plan.badge}
                        </span>
                        {plan.popular && (
                          <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                            <Sparkles className="w-4 h-4 animate-spin-slow" />
                            Mais Indicado
                          </span>
                        )}
                      </div>
                    )}

                    <div className="mb-6">
                      <h4 className="text-xl sm:text-2xl font-bold text-white leading-tight mb-2">
                        {plan.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed min-h-[48px]">
                        {plan.description}
                      </p>
                    </div>

                    {/* Price Tag */}
                    <div className="mb-8 p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-baseline gap-1.5 relative overflow-hidden">
                      <span className="text-sm font-light text-gray-400">R$</span>
                      <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
                        {plan.price}
                      </span>
                      <span className="text-xs text-gray-400 font-light">
                        / {plan.period}
                      </span>
                    </div>

                    {/* Feature Lists */}
                    <div className="flex-grow space-y-4 mb-10 text-left">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-4">
                        O que está incluído:
                      </span>
                      {plan.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-3">
                          <div className={`p-0.5 rounded-full shrink-0 mt-0.5 bg-opacity-10 ${
                            plan.color === "cyan" ? "bg-cyan-500/10 text-cyan-400" : 
                            plan.color === "green" ? "bg-emerald-500/10 text-emerald-400" : 
                            "bg-indigo-500/10 text-indigo-400"
                          }`}>
                            <Check className="w-4 h-4" />
                          </div>
                          <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <a
                      href={`https://wa.me/5534984441801?text=${encodeURIComponent(plan.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-4 px-6 rounded-xl font-bold text-sm sm:text-base text-center flex items-center justify-center gap-2 transition-all duration-300 ${
                        plan.popular
                          ? "bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 hover:shadow-lg hover:shadow-emerald-500/25 text-neutral-950 hover:scale-[1.01]"
                          : "bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/15 text-white"
                      }`}
                    >
                      {plan.ctaText}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Card>
                </ScrollAnimationWrapper>
              );
            })}
          </div>
        ) : (
          /* CUSTOMIZED ORÇAMENTO SOB MEDIDA BUILDER */
          <div className="max-w-4xl mx-auto">
            <ScrollAnimationWrapper delay="duration-500">
              <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.01] border border-white/5 shadow-2xl relative">
                <div className="absolute top-0 right-0 p-6 opacity-20 pointer-events-none">
                  <ShieldCheck className="w-20 h-20 text-primary" />
                </div>
                
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">Simulador de Serviços e Treinamentos</h4>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
                  Selecione abaixo quais demandas seu negócio precisa atualmente. Eu vou estruturar uma proposta personalizada com escopo adequado, condições de parcelamento e melhores custos do mercado.
                </p>

                {/* Option checkboxes styled as elegant cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {customServiceOptions.map((option) => {
                    const isSelected = selectedCustomServices.includes(option.name);
                    return (
                      <button
                        key={option.name}
                        onClick={() => handleToggleCustomService(option.name)}
                        className={`p-4 rounded-xl border text-left cursor-pointer flex gap-4 transition-all duration-300 ${
                          isSelected 
                            ? "bg-primary/10 border-primary text-white shadow-md shadow-primary/10 scale-[1.01]" 
                            : "bg-white/[0.02] border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/[0.04]"
                        }`}
                      >
                        <div className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center border shrink-0 transition-colors ${
                          isSelected ? "bg-primary border-primary text-neutral-950" : "border-white/20 whitespace-normal"
                        }`}>
                          {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
                        </div>
                        <div className="space-y-1">
                          <span className="font-semibold text-xs sm:text-sm block leading-tight">
                            {option.name}
                          </span>
                          <span className="text-[10px] text-gray-400 font-mono block">
                            Preço referência sob consulta
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Summary Box */}
                <div className="p-6 rounded-2xl bg-[#00D9FF]/5 border border-[#00D9FF]/10 mb-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-start gap-3 text-left">
                    <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-sm text-cyan-400 uppercase tracking-widest mb-1">
                        Total Selecionado: {selectedCustomServices.length} {selectedCustomServices.length === 1 ? 'demanda' : 'demandas'}
                      </h5>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        Ao encaminhar o diagnóstico pelo WhatsApp, receba gratuitamente meu feedback inicial de viabilidade técnica.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action button */}
                <button
                  onClick={handleCustomQuoteSubmit}
                  className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-[#00D9FF] via-indigo-500 to-[#00D9FF] bg-[length:200%_auto] hover:bg-right transition-all duration-500 font-bold text-sm sm:text-base text-neutral-950 flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-[#00D9FF]/10 active:scale-[0.99]"
                >
                  <MessageCircle className="w-5 h-5 fill-neutral-950" />
                  Solicitar Proposta no WhatsApp
                </button>
              </div>
            </ScrollAnimationWrapper>
          </div>
        )}
      </div>
    </section>
  );
}
