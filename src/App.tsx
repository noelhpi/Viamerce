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
  Users
} from 'lucide-react';
import { ScrollAnimationWrapper } from './components/ScrollAnimationWrapper';
import { Card } from './components/ui/card';
import { Toaster } from 'sonner';
import { BackToTop } from './components/BackToTop';
import { Header } from './components/Header';
import { About } from './components/About';
import { Benefits } from './components/Benefits';
import { Consultant } from './components/Consultant';
import { Contact } from './components/Contact';

export default function App() {
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
                  <span className="text-[10px] sm:text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent uppercase tracking-wider">Consultoria Especializada em E-commerce</span>
                </div>
              </div>
              <h1 className="text-4xl sm:text-7xl lg:text-8xl font-display font-bold text-foreground mb-6 sm:mb-8 leading-[1.1] sm:leading-[0.9] tracking-tighter">
                Potencialize sua loja online<br />
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">para o Sucesso</span>
              </h1>
              <p className="text-lg sm:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                Transformamos sua loja virtual em uma máquina de vendas com estratégias personalizadas de SEO, marketing e logística.
              </p>
              <a 
                href="https://wa.me/5534984441801?text=Olá! Gostaria de saber mais sobre a consultoria Viamerce." 
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="group bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 sm:px-12 py-4 sm:py-6 rounded-full text-lg sm:text-xl font-bold hover:shadow-[0_0_50px_rgba(0,217,255,0.6)] shadow-lg transition-all duration-500 hover:scale-110 active:scale-95 flex items-center gap-3 sm:gap-4 mx-auto btn-shine cursor-pointer">
                  Fale com o Consultor
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
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <Rocket className="w-12 h-12 sm:w-16 sm:h-16 text-primary animate-pulse" />
                    <h2 className="text-3xl sm:text-6xl font-bold text-foreground tracking-tight">Bem-vindo à Viamerce!</h2>
                  </div>
                  <p className="text-lg sm:text-3xl text-muted-foreground leading-relaxed mb-10 sm:mb-12 font-light">
                    Somos uma consultoria especializada na <span className="text-white font-medium">estruturação completa</span> de pequenos e-commerces e lojas online, atuando desde o planejamento inicial até a operação final.
                  </p>
                  <a 
                    href="https://wa.me/5534984441801?text=Olá! Vim pelo site e gostaria de um diagnóstico." 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg transition-all duration-500 hover:scale-110 active:scale-95 flex items-center justify-center gap-3 shadow-xl hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] btn-shine cursor-pointer">
                      Entre em contato clicando aqui!
                      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                  </a>
                </div>
              </Card>
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* Services Grid */}
        <section id="servicos" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimationWrapper>
              <div className="text-center mb-12 sm:mb-20">
                <h2 className="text-3xl sm:text-6xl font-bold text-foreground mb-4">Veja como nossas soluções podem</h2>
                <h3 className="text-2xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">impulsionar seu e-commerce</h3>
              </div>
            </ScrollAnimationWrapper>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              <ServiceCategory 
                icon={Target}
                title="Diagnóstico Estratégico"
                color="primary"
                items={[
                  { label: "Produto", desc: "Identificamos e posicionamos o que você vende como a melhor escolha do mercado, destacando seus diferenciais e valor percebido." },
                  { label: "Público", desc: "Realizamos uma análise profunda do seu público-alvo para orientar todas as ações de marketing e vendas com foco em conversão." }
                ]}
                delay="duration-700"
              />
              <ServiceCategory 
                icon={TrendingUp}
                title="Marketing e Relacionamento"
                color="accent"
                items={[
                  { label: "Atração de Tráfego Qualificado", desc: "Implementamos estratégias de SEO, mídia paga e presença ativa nas redes sociais para atrair visitantes com alto potencial de compra." },
                  { label: "Relacionamento com o Cliente", desc: "Criamos jornadas de atendimento que encantam e fidelizam, desde o primeiro contato até o pós-venda." }
                ]}
                delay="duration-800"
              />
              <ServiceCategory 
                icon={ChartColumn}
                title="Tecnologia e Operação"
                color="amber-500"
                items={[
                  { label: "Plataforma e Experiência", desc: "Avaliamos e otimizamos sua loja virtual para garantir velocidade, navegabilidade e responsividade em todos os dispositivos." },
                  { label: "Logística e Pagamentos", desc: "Estruturamos processos logísticos eficientes e sistemas de pagamento seguros, reduzindo riscos." }
                ]}
                delay="duration-1000"
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <Benefits />

        {/* Audience Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <ScrollAnimationWrapper>
              <h2 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">Para quem é essa consultoria?</h2>
              <p className="text-xl text-muted-foreground mb-16">Pequenos empreendedores, gestores e empresas que desejam:</p>
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
              alt="Viamerce Logo" 
              className="h-10 w-auto"
              onError={(e) => {
                e.currentTarget.src = "https://cdn-static-lumi.artvibe.ai/77/77ad5eb98a186b1b2cd8da206fb0c05f.png";
              }}
            />
            <span className="font-display font-bold text-xl text-foreground">Viamerce</span>
          </div>
          <p className="text-muted-foreground text-center">© 2025 Viamerce. Todos os direitos reservados.</p>
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
