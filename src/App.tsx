import React, { useState, useEffect } from 'react';
import { 
  Menu,
  X,
  ArrowRight, 
  Target, 
  TrendingUp, 
  MessageCircle, 
  Rocket, 
  Zap,
  ChartColumn,
  MapPin,
  Users,
  CheckCircle,
  HelpCircle,
  ChevronRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollAnimationWrapper } from './components/ScrollAnimationWrapper';
import { Card } from './components/ui/card';
import { Toaster } from 'sonner';
import { BackToTop } from './components/BackToTop';
import { Header } from './components/Header';
import { About } from './components/About';
import { Benefits } from './components/Benefits';
import { Consultant } from './components/Consultant';
import { Contact } from './components/Contact';
import { PricingPlans } from './components/PricingPlans';
import { serviceCategories, type ServiceCategory as ServicesCategoryType } from './data/services';

interface CategoryContentProps {
  category: ServicesCategoryType;
  isMobile?: boolean;
  key?: string;
}

function CategoryContent({ category, isMobile = false }: CategoryContentProps) {
  const Icon = category.icon;
  const accentColor = 
    category.color === "cyan" ? "text-[#00D9FF]" : 
    category.color === "green" ? "text-emerald-400" : 
    category.color === "amber" ? "text-amber-400" : 
    category.color === "rose" ? "text-rose-400" :
    "text-indigo-400";

  return (
    <div className={`space-y-6 sm:space-y-12 ${isMobile ? 'py-2' : 'animate-fade-in'}`}>
      {/* Category Description Area */}
      <div className={`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 p-5 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 max-w-5xl mx-auto ${isMobile ? 'mx-0 bg-transparent border-0 p-1 mb-2' : ''}`}>
        {!isMobile && (
          <div className={`p-3.5 rounded-xl bg-white/[0.03] shrink-0 ${accentColor}`}>
            <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>
        )}
        <div>
          {!isMobile && <h4 className="text-lg sm:text-2xl font-bold text-white mb-1.5">{category.title.split('. ')[1]}</h4>}
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{category.description}</p>
        </div>
      </div>

      {/* Services Grid for Current Category */}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 max-w-7xl mx-auto justify-center ${isMobile ? 'px-0' : ''}`}>
        {category.services.map((service, idx) => {
          const ServiceIcon = service.icon;
          const cardColor = 
            category.color === "cyan" ? "cyan" : 
            category.color === "green" ? "green" : 
            category.color === "amber" ? "amber" : 
            category.color === "rose" ? "rose" :
            "indigo";

          return (
            <ScrollAnimationWrapper 
              key={service.name} 
              delay={isMobile ? 'duration-150' : `duration-${600 + idx * 100}`}
            >
              <Card 
                color={cardColor} 
                className={`flex flex-col h-full hover:scale-[1.01] sm:hover:scale-[1.02] transition-all duration-500 overflow-hidden relative group ${
                  isMobile ? 'p-4 bg-white/[0.01] border-white/5' : 'p-5 sm:p-8'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-xl bg-white/[0.03] shrink-0 ${accentColor} group-hover:scale-110 transition-transform duration-500`}>
                    <ServiceIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h4 className="font-bold text-sm sm:text-xl text-white leading-tight break-words">
                    {service.name}
                  </h4>
                </div>

                <p className="text-xs sm:text-base text-gray-400 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Benefit Section Highlight */}
                <div className="mt-4 p-3 rounded-xl bg-emerald-500/[0.03] border border-emerald-500/10 flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest mb-0.5">Benefício Direto</h5>
                    <p className="text-[11px] sm:text-xs text-slate-300 leading-normal">
                      {service.benefit}
                    </p>
                  </div>
                </div>
              </Card>
            </ScrollAnimationWrapper>
          );
        })}
      </div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden font-body antialiased">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="top" className="relative pt-32 sm:pt-40 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <ScrollAnimationWrapper>
              <div className="inline-block mb-6 sm:mb-8">
                <div className="flex items-center gap-2 bg-gradient-to-r from-primary/20 to-accent/20 px-4 sm:px-6 py-2 rounded-full border border-primary/30">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-[10px] sm:text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent uppercase tracking-wider">Setup e Estruturação Completa de E-commerce</span>
                </div>
              </div>
              <h1 className="text-[2.5rem] sm:text-7xl lg:text-8xl font-display font-bold text-foreground mb-6 sm:mb-8 leading-tight sm:leading-[0.9] tracking-tight sm:tracking-tighter break-words">
                Sua Loja Virtual no Ar, <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">Pronta para Vender</span>
              </h1>
              <p className="text-base sm:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                Criação de e-commerce, integração de marketplaces, Automação com ERP e HUB e treinamento operacional prático para sua equipe deslanchar.
              </p>
              <a 
                href="https://wa.me/5534984441801?text=Olá! Gostaria de saber mais sobre o setup e estruturação de e-commerce com o Noel." 
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="group bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 sm:px-12 py-4 sm:py-6 rounded-full text-lg sm:text-xl font-bold hover:shadow-[0_0_50px_rgba(0,217,255,0.6)] shadow-lg transition-all duration-500 hover:scale-110 active:scale-95 flex items-center gap-3 sm:gap-4 mx-auto btn-shine cursor-pointer">
                  Fale com o Especialista
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* Welcome Block */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0F2744] to-background">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimationWrapper>
              <Card color="cyan" className="p-6 sm:p-20 relative overflow-hidden text-center sm:text-left">
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <Rocket className="w-12 h-12 sm:w-16 sm:h-16 text-primary animate-pulse shrink-0" />
                    <h2 className="text-2xl sm:text-6xl font-bold text-foreground tracking-tight leading-tight text-center sm:text-left">Setup e Implantação de E-commerce</h2>
                  </div>
                  <p className="text-base sm:text-3xl text-muted-foreground leading-relaxed mb-10 sm:mb-12 font-light text-center sm:text-left">
                    Sou especialista na <span className="text-white font-medium">implantação completa, configuração técnica e integração de canais</span> para e-commerce de pequenas empresas. Atuo pessoalmente configurando sua plataforma e integrando ERP e HUB e marketplaces, entregando também treinamento operacional prático para sua equipe gerir tudo com autonomia.
                  </p>
                  <a 
                    href="https://wa.me/5534984441801?text=Olá! Vim pelo site e gostaria de falar sobre o setup e implantação de e-commerce com o Noel." 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg transition-all duration-500 hover:scale-110 active:scale-95 flex items-center justify-center gap-3 shadow-xl hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] btn-shine cursor-pointer">
                      Fale sobre o Setup do seu E-commerce
                      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                  </a>
                </div>
              </Card>
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* Services Grid */}
        <section id="servicos" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-y border-primary/10 bg-gradient-to-b from-background via-primary/5 to-background">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimationWrapper>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-6xl font-bold text-foreground mb-4">Catálogo de Serviços</h2>
                <p className="text-gray-400 text-base sm:text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
                  Selecione uma categoria abaixo para explorar os detalhes de cada serviço e o benefício direto para seu negócio.
                </p>
              </div>
            </ScrollAnimationWrapper>

            {/* DESKTOP LAYOUT (sm:block hidden) */}
            <div className="hidden sm:block">
              {/* Category Navigation Tabs */}
              <ScrollAnimationWrapper delay="duration-500">
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-16 max-w-7xl mx-auto">
                  {serviceCategories.map((category) => {
                    const Icon = category.icon;
                    const isActive = activeTab === category.id;
                    const activeColorClasses = 
                      category.color === "cyan" ? "border-[#00D9FF] text-[#00D9FF] bg-[#00D9FF]/10 shadow-[0_0_25px_rgba(0,217,255,0.15)] animate-pulse-slow" : 
                      category.color === "green" ? "border-emerald-500 text-emerald-400 bg-emerald-500/10 shadow-[0_0_25px_rgba(16,185,129,0.15)]" : 
                      category.color === "amber" ? "border-amber-500 text-amber-400 bg-amber-500/10 shadow-[0_0_25px_rgba(245,158,11,0.15)]" : 
                      category.color === "rose" ? "border-rose-500 text-rose-400 bg-rose-500/10 shadow-[0_0_25px_rgba(244,63,94,0.15)]" :
                      "border-indigo-500 text-indigo-400 bg-indigo-500/10 shadow-[0_0_25px_rgba(99,102,241,0.15)]";

                    return (
                      <button
                        key={category.id}
                        onClick={() => setActiveTab(activeTab === category.id ? null : category.id)}
                        className={`flex items-center gap-3.5 p-5 rounded-2xl border text-left cursor-pointer transition-all duration-550 ${
                          isActive 
                            ? `${activeColorClasses}` 
                            : "border-white/15 hover:border-white/30 hover:bg-white/[0.04] text-gray-400 hover:text-white"
                        }`}
                      >
                        <div className={`p-2.5 rounded-xl shrink-0 ${isActive ? 'bg-white/10' : 'bg-white/[0.03]'}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="font-semibold text-sm sm:text-base leading-tight">
                          {category.title.split('. ')[1]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </ScrollAnimationWrapper>

              {/* Selected Category Details & Service Items Grid */}
              {serviceCategories.map((category) => {
                if (category.id !== activeTab) return null;
                return (
                  <CategoryContent key={category.id} category={category} />
                );
              })}
            </div>

            {/* MOBILE LAYOUT (sm:hidden block) */}
            <div className="block sm:hidden space-y-4">
              {serviceCategories.map((category) => {
                const Icon = category.icon;
                const isActive = activeTab === category.id;
                const activeColorClasses = 
                  category.color === "cyan" ? "border-[#00D9FF] text-[#00D9FF] bg-[#00D9FF]/10 shadow-[0_0_15px_rgba(0,217,255,0.15)]" : 
                  category.color === "green" ? "border-emerald-500 text-emerald-400 bg-emerald-500/10 shadow-[0_0_15px_rgba(16,185,129,0.15)]" : 
                  category.color === "amber" ? "border-amber-500 text-amber-400 bg-emerald-500/10 shadow-[0_0_15px_rgba(245,158,11,0.15)]" : 
                  category.color === "rose" ? "border-rose-500 text-rose-400 bg-rose-500/10 shadow-[0_0_15px_rgba(244,63,94,0.15)]" :
                  "border-indigo-500 text-indigo-400 bg-indigo-500/10 shadow-[0_0_15px_rgba(99,102,241,0.15)]";

                return (
                  <div key={category.id} className="border border-white/5 rounded-2xl overflow-hidden bg-white/[0.01]">
                    <button
                      onClick={() => setActiveTab(isActive ? null : category.id)}
                      className={`w-full flex items-center justify-between gap-3.5 p-4 border text-left cursor-pointer transition-all duration-300 rounded-2xl ${
                        isActive 
                          ? `${activeColorClasses}` 
                          : "border-white/10 hover:border-white/20 hover:bg-white/[0.02] text-gray-400 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-xl shrink-0 ${isActive ? 'bg-white/10 text-white' : 'bg-white/[0.03] text-gray-400'}`}>
                          <Icon className="w-5.5 h-5.5" />
                        </div>
                        <span className="font-semibold text-sm leading-tight text-white">
                          {category.title.split('. ')[1]}
                        </span>
                      </div>
                      <div>
                        {isActive ? (
                          <ChevronUp className="w-5 h-5 text-gray-400 shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                        )}
                      </div>
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 pt-2 border-t border-white/5">
                            <CategoryContent category={category} isMobile={true} />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <Benefits />

        {/* Audience Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <ScrollAnimationWrapper>
              <h2 className="text-3xl sm:text-6xl font-bold text-foreground mb-6 leading-tight">Para quem é este Setup e Solução?</h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-12 sm:mb-16">Pequenos empreendedores, lojistas e gestores que precisam de:</p>
            </ScrollAnimationWrapper>
            
            <div className="grid md:grid-cols-3 gap-8">
              <AudienceItem 
                icon={Rocket}
                title="Lançar ou reestruturar seu e-commerce"
                desc="Comece do jeito certo ou revitalize sua operação existente"
                delay="duration-700"
              />
              <AudienceItem 
                icon={TrendingUp}
                title="Aumentar vendas com estratégias digitais"
                desc="Implemente táticas comprovadas para crescimento sustentável"
                delay="duration-800"
              />
              <AudienceItem 
                icon={Users}
                title="Melhorar a experiência do cliente e a operação"
                desc="Otimize processos e encante seus clientes"
                delay="duration-1000"
              />
            </div>
          </div>
        </section>

        {/* Pricing & Investment Tiers */}
        <PricingPlans />

        {/* About Section */}
        <About />

        <Consultant />

        <Contact />
      </main>

      <footer className="py-20 px-4 sm:px-6 lg:px-8 border-t border-primary/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src="/Logo fundo trasparente.png" 
              alt="Noel Ribeiro" 
              className="h-10 w-auto"
              onError={(e) => {
                e.currentTarget.src = "https://cdn-static-lumi.artvibe.ai/77/77ad5eb98a186b1b2cd8da206fb0c05f.png";
              }}
            />
            <span className="font-display font-bold text-xl text-foreground">Noel Ribeiro</span>
          </div>
          <p className="text-muted-foreground text-center">© 2026 Noel Ribeiro. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Patrocínio - MG</span>
          </div>
        </div>
      </footer>
      <Toaster richColors position="bottom-right" />
      <BackToTop />
    </div>
  );
}

function ServiceCategory({ icon: Icon, title, color, items, delay }: { icon: any; title: string; color: string; items: any[]; delay: string }) {
  const colorClass = color === 'primary' ? 'text-primary' : color === 'accent' ? 'text-accent' : 'text-amber-500';
  
  return (
    <ScrollAnimationWrapper delay={delay}>
      <Card color={color === 'primary' ? 'cyan' : color === 'accent' ? 'green' : 'amber'} className="h-full p-6 sm:p-10">
        <div className="bg-gradient-to-br from-primary/20 to-accent/20 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-500">
          <Icon className={`w-8 h-8 sm:w-10 sm:h-10 ${colorClass}`} />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 leading-tight">{title}</h3>
        <div className="space-y-4 sm:space-y-6">
          {items.map((item, idx) => (
            <div key={idx}>
              <h4 className={`font-bold text-base sm:text-lg mb-1 sm:mb-2 ${colorClass}`}>{item.label}</h4>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Card>
    </ScrollAnimationWrapper>
  );
}

function AudienceItem({ icon: Icon, title, desc, delay }: { icon: any; title: string; desc: string; delay: string }) {
  return (
    <ScrollAnimationWrapper delay={delay}>
      <Card color="cyan" className="p-6 sm:p-10 h-full group">
        <Icon className="w-12 h-12 sm:w-16 sm:h-16 text-primary mb-6 sm:mb-8 group-hover:rotate-12 transition-transform duration-500" />
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 leading-tight">{title}</h3>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{desc}</p>
      </Card>
    </ScrollAnimationWrapper>
  );
}
