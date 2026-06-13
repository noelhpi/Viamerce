import { 
  Globe, 
  Server, 
  Laptop, 
  Store, 
  Boxes, 
  Smartphone, 
  Search, 
  Code, 
  MapPin, 
  CreditCard, 
  Truck, 
  PackageCheck, 
  GraduationCap, 
  Presentation, 
  Users2, 
  BookOpen 
} from 'lucide-react';

export interface ServiceItem {
  name: string;
  description: string;
  benefit: string;
  icon: any;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: 'cyan' | 'green' | 'amber' | 'rose' | 'indigo';
  services: ServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "infraestrutura",
    title: "1. Infraestrutura Digital Essencial",
    description: "Os pilares fundamentais para qualquer negócio local operar online de forma profissional, segura e sem quedas.",
    icon: Server,
    color: "cyan",
    services: [
      {
        name: "Identidade Digital (Domínio e DNS)",
        description: "Registro, apontamento técnico de DNS e gestão do nome exclusivo da sua loja na internet (ex: suamarca.com.br).",
        benefit: "Garante profissionalismo, credibilidade imediata e posicionamento digital seguro sob sua própria marca.",
        icon: Globe
      },
      {
        name: "Servidores e Cloud Hosting",
        description: "Escolha, contratação e calibração fina de hospedagem em servidores de alta performance para o seu site e canais de venda online.",
        benefit: "Garante que o seu site seja extremamente rápido, seguro contra invasões e 100% livre de quedas.",
        icon: Server
      },
      {
        name: "Desenvolvimento de Site e Loja Virtual",
        description: "Desenvolvimento do seu site institucional completo ou e-commerce robusto contendo catálogo dinâmico de produtos, carrinho e checkout fáceis.",
        benefit: "Permite vender seus produtos 24 horas por dia, expandir seu alcance físico para novas regiões e escalar vendas online.",
        icon: Laptop
      }
    ]
  },
  {
    id: "plataformas",
    title: "2. Plataformas e Canais de Venda",
    description: "Configuração inteligente das principais plataformas de e-commerce e integrações para ampliar o alcance e trazer novos compradores.",
    icon: Store,
    color: "green",
    services: [
      {
        name: "Plataformas de E-commerce",
        description: "Apoio prático na escolha inteligente da ferramenta ideal (Nuvemshop, Shopify, Loja Integrada, etc.) e sua implementação de ponta a ponta.",
        benefit: "Reduz custos de implantação, simplifica a gestão de pedidos e garante navegação perfeita ao cliente final.",
        icon: Store
      },
      {
        name: "Integração com Marketplaces",
        description: "Estruturação técnica e cadastramento inteligente de produtos em portais líderes do mercado (Mercado Livre, Shopee, Amazon e Magalu).",
        benefit: "Expõe seus produtos para milhões de potenciais compradores sem depender de investimentos pesados em tráfego pago inicial.",
        icon: Boxes
      },
      {
        name: "Canais Locais e Sociais (iFood e Redes)",
        description: "Abertura de novos canais dinâmicos de atendimento e faturamento, como TikTok Meu Negócio, cardápios em iFood / Rappi e WhatsApp.",
        benefit: "Expande a abrangência de vendas e entrega do seu comércio, encontrando os compradores ativos do dia-a-dia.",
        icon: Smartphone
      }
    ]
  },
  {
    id: "marketing",
    title: "3. Otimização e Marketing Digital",
    description: "Métodos essenciais para assegurar que seu negócio seja encontrado nos mecanismos de busca e gere o melhor retorno sobre o investimento físico/digital.",
    icon: Search,
    color: "amber",
    services: [
      {
        name: "SEO (Posicionamento no Google)",
        description: "Otimização completa do conteúdo, termos de busca e arquitetura do e-commerce para subir no ranqueamento de buscas do Google.",
        benefit: "Gera um tráfego de alta qualidade e totalmente gratuito no longo prazo para sua loja online a cada busca por seus produtos.",
        icon: Search
      },
      {
        name: "Pixels de Rastreamento (Meta/Google)",
        description: "Instalação técnica e testes integrados das ferramentas de rastreio inteligente para monitorar o funil de compras em tempo real.",
        benefit: "Possibilita veicular campanhas otimizadas de remarketing focado apenas em quem demonstrou intenção real de finalizar a compra.",
        icon: Code
      },
      {
        name: "Google Meu Negócio e Analytics",
        description: "Criação de perfil de alta autoridade de SEO local no Google Maps e parametrização avançada de tráfego com Google Analytics.",
        benefit: "Atrai maior fluxo de compradores locais para sua loja física e dá visibilidade clara de onde vêm suas vendas digitais.",
        icon: MapPin
      }
    ]
  },
  {
    id: "logistica",
    title: "4. Gestão Operacional e Logística",
    description: "Estruturação ágil de faturamento, controle integrado de estoque e fretes para sustentar operações digitais fluidas e lucrativas.",
    icon: Truck,
    color: "rose",
    services: [
      {
        name: "Processamento de Pagamentos",
        description: "Configuração profissional de intermediadores transparentes (Mercado Pago, PagSeguro, Pagar.me) oferecendo excelentes taxas.",
        benefit: "Traz opções versáteis em Pix Instantâneo e parcelamentos competitivos, blindando o fluxo contra fraudes digitais.",
        icon: CreditCard
      },
      {
        name: "Logística Avançada e Frete",
        description: "Integração dinâmica de contratos exclusivos (Melhor Envio, Jadlog, Correios) e revisão dos processos internos de entrega.",
        benefit: "Reduz drasticamente o abandono no carrinho por frete alto, oferecendo mais de uma opção de prazo e preço competitivo ao comprador.",
        icon: Truck
      },
      {
        name: "Gestão Unificada via ERP e HUB",
        description: "Sincronização completa da loja virtual e canais adicionais com o ERP e HUB para gestão unificada contínua de fluxo de faturamento.",
        benefit: "Evita faturamento em duplicidade, automatiza a emissão de notas fiscais de forma instantânea e otimiza o controle de estoque real.",
        icon: PackageCheck
      }
    ]
  },
  {
    id: "treinamentos",
    title: "5. Palestras e Treinamentos",
    description: "Capacitação profissional e palestras de alta energia para habilitar equipes locais na operação e dominar conceitos modernos de comércio digital.",
    icon: GraduationCap,
    color: "indigo",
    services: [
      {
        name: "Palestras Estratégicas",
        description: "Apresentações dinâmicas e de alto impacto voltadas a eventos locais, associações de lojistas e feiras de fomento comercial.",
        benefit: "Inspira empreendedores locais fornecendo insights acionáveis imediatos sobre mentalidade empreendedora e conversão digital.",
        icon: Presentation
      },
      {
        name: "Treinamentos Operacionais de Lojas",
        description: "Instrução técnica presencial ou por chamada dirigida para capacitar operadores no faturamento de pedidos, controle no ERP e HUB e expedição rápida.",
        benefit: "Concede autonomia operacional rápida à sua equipe, zerando falhas recorrentes no manuseio de estoque e postagem.",
        icon: Users2
      },
      {
        name: "Mentorias e Oficinas Práticas",
        description: "Sessões personalizadas focadas no desenho estratégico do negócio, jornada online e posicionamento local de marca e-commerce.",
        benefit: "Construção de plano de ação cirúrgico e adaptado à sua realidade, com direcionamentos validados diretamente comigo.",
        icon: BookOpen
      }
    ]
  }
];
