import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ChevronRight, MessageCircle, Anchor, Map, Calendar, Users, Camera, Shield, PlayCircle, X, Instagram, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

const images = [
  "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520116468816-95b69f847357?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1495954484750-af469f2f9be5?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559494007-9f5847c49d94?q=80&w=800&auto=format&fit=crop",
];

const plans = [
  {
    name: "Plano Corais",
    price: "55",
    description: "Ideal para quem quer começar a viver o mar com a gente.",
    features: [
      "01 Camiseta do Clube dos Nadadores",
      "01 Touca Speedo Rota55",
      "01 Mochila Estanque 12L Rota55",
      "Fuga ao Luar",
      "Jureia - Una",
      "Una - Juquehy",
      "Juquehy - Sahy",
      "Volta as Ilhas do Sahy",
      "Sahy - Baleia",
      "Baleia - Camburi",
      "Camburi - Boissucanga",
      "Boissucanga - Maresias",
      "Maresias - Pauba",
      "Pauba - Toque Toque"
    ],
    highlight: false
  },
  {
    name: "Plano Arquipélago",
    price: "100",
    description: "Para quem quer mais aventuras e descontos exclusivos.",
    features: [
      "01 Camiseta do Clube dos Nadadores",
      "01 Touca Speedo Rota55",
      "01 Mochila Estanque 22L Rota55",
      "01 Vaga Fuga ao Luar",
      "01 Vaga na Area VIP da Fuga das Ilhas",
      "Todas as 10 etapas do Circuito das Praias",
      "20% de desconto em 5 Eventos Especiais Rota55",
      "20% de desconto no 1º lote de provas parceiras"
    ],
    highlight: true
  },
  {
    name: "Plano Oceano",
    price: "295",
    description: "A experiência completa. Todos os eventos inclusos.",
    features: [
      "01 Camiseta do Clube dos Nadadores",
      "01 Touca Speedo Rota55",
      "01 Mochila Estanque Rota55",
      "Fuga ao Luar",
      "Vaga na Area VIP da Fuga das Ilhas",
      "Todas as 10 etapas do Circuito das Praias",
      "+ 5 Eventos Especiais INCLUSOS",
      "20% de desconto no 1º lote de provas parceiras"
    ],
    highlight: false
  }
];

const faqs = [
  {
    question: "O que eu ganho?",
    answer: "Ao assinar, você ganha um Kit Exclusivo do Sócio (Camiseta oficial, Touca Speedo Rota55 e Mochila Estanque), além de motivação real, fotos incríveis da sua natação e a chance de fazer parte de uma comunidade unida."
  },
  {
    question: "O que eu tenho direito?",
    answer: "Dependendo do seu plano, você tem direito a participar de etapas do Circuito 10 Praias, vagas em eventos icônicos como Fuga ao Luar, e até 20% de desconto em provas desejadas do Brasil (Circuito Mares, Canal de Ilhabela, etc)."
  },
  {
    question: "Como participo?",
    answer: "É simples! Escolha o plano que melhor se adapta ao seu momento, faça a assinatura e você já estará dentro do Clube. A partir daí, é só acompanhar o calendário e confirmar sua presença nos desafios."
  },
  {
    question: "Tem uma agenda anual preparada?",
    answer: "Sim! Nosso ano de 2026 já está desenhado com travessias por Guaratuba, Paraty, Ilhabela, Montão de Trigo e o espetacular Arquipélago de Alcatrazes. Um ano ativo e inesquecível espera por você."
  }
];

const ImageModal = ({ imageUrl, onClose }: { imageUrl: string, onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-md" onClick={onClose}>
      <button onClick={onClose} className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors">
        <X size={36} />
      </button>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-4xl max-h-[90vh] bg-black rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        <img src={imageUrl} alt="Galeria Rota 55" className="w-full h-full object-contain max-h-[90vh]" />
      </motion.div>
    </div>
  )
}

export default function LandingPage() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const scrollToPlans = () => {
    document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200">
      {activeImage && <ImageModal imageUrl={activeImage} onClose={() => setActiveImage(null)} />}

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-40 bg-slate-900">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop"
            alt="Praia Litoral Norte SP"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6 border border-blue-500/30">
              <Anchor size={14} /> Clube dos Nadadores Rota 55
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-6 leading-tight">
              Você não pode ficar de fora <br className="hidden md:block" />
              <span className="text-blue-400 italic">deste clube!</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Muito mais do que um simples grupo de nadadores, aqui temos muita informação, eventos incríveis e descontos coletivos. Entre, prometo que será incrível!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={scrollToPlans}
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold text-lg transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-15px_rgba(37,99,235,0.7)] flex items-center justify-center gap-2"
              >
                Quero fazer parte <ChevronRight size={20} />
              </button>
              <a
                href="https://chat.whatsapp.com/HzDQA2toZddF5F6xIKU1gf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold text-lg transition-all backdrop-blur-sm flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} /> Entrar no Grupo Gratuito
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Nossos Cenários</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              O Litoral Norte como você nunca viu. Explore as paisagens onde nossas histórias acontecem e prepare-se para viver o mar de uma forma totalmente nova.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {images.map((imgUrl, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative aspect-square bg-slate-900 rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setActiveImage(imgUrl)}
              >
                <img
                  src={imgUrl}
                  alt={`Cenário Rota 55 ${idx + 1}`}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">O que te espera em 2026</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Ao se tornar sócio, você passa a viver travessias pelas praias, ilhas e pontos mais icônicos da Rota55. A cada encontro, você vive um novo desafio, novas histórias e novas amizades sempre cercado de natureza.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Users, title: "Comunidade Unida", desc: "Faça parte de um grupo que incentiva, apoia, vibra e se desafia o tempo todo." },
                  { icon: Map, title: "Aventuras Reais", desc: "Guaratuba, Paraty, Ilhabela, Montão de Trigo e o espetacular Arquipélago de Alcatrazes." },
                  { icon: Camera, title: "Registros Incríveis", desc: "Ganha a foto de natação da sua vida em cenários paradisíacos." },
                  { icon: Shield, title: "Kit Exclusivo", desc: "Receba camiseta oficial, touca Speedo Rota55 e mochila estanque." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551524559-8af4e6624178?q=80&w=2026&auto=format&fit=crop"
                  alt="Nadadores em travessia no mar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Member" />
                      </div>
                    ))}
                  </div>
                  <span className="font-bold text-sm">+250 sócios</span>
                </div>
                <p className="text-sm text-slate-600 font-medium">Junte-se à comunidade que mais cresce no litoral.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Ricardo Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden shadow-2xl">
                {/* Nota: Substitua o link abaixo pela URL da segunda foto do Instagram dele */}
                <img
                  src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=2070&auto=format&fit=crop"
                  alt="Litoral Norte - Foco no Mar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 right-6 md:bottom-8 md:-right-8 bg-blue-600 p-6 rounded-2xl shadow-xl max-w-xs">
                <p className="text-xl font-serif font-bold italic">"Nós não temos pódios, vivemos histórias."</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold mb-2">Quem está no comando?</h2>
              <h3 className="text-2xl text-blue-400 mb-6 font-medium">Ricardo Augusto</h3>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Apaixonado pelo oceano e por desafios reais, Ricardo é o idealizador do <strong>Clube dos Nadadores Rota 55</strong>. Sua missão nunca foi sobre quem chega primeiro, mas sobre quem tem coragem de entrar na água e viver a verdadeira essência da natação no mar.
              </p>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Com anos de experiência desbravando as águas de Ilhabela, Alcatrazes e todo o litoral, ele criou este clube para unir pessoas que buscam mais do que medalhas: buscam histórias para contar, superação e uma comunidade que vibra junto a cada braçada.
              </p>

              <a
                href="https://www.instagram.com/ricardo_augusto_dagua/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold transition-all backdrop-blur-sm border border-white/10"
              >
                <Instagram size={20} /> @ricardo_augusto_dagua
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="planos" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Escolha o seu plano</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Se você ama o mar, busca desafios e quer compartilhar sua jornada com pessoas incríveis... Você já é um de nós.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex flex-col bg-white rounded-3xl p-8 shadow-sm border ${plan.highlight ? 'border-blue-500 shadow-blue-500/10 shadow-xl scale-105 z-10' : 'border-slate-200'}`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                      Mais Escolhido
                    </span>
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-slate-500 text-sm h-10">{plan.description}</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-sm font-medium text-slate-500">12x R$</span>
                    <span className="text-5xl font-bold tracking-tight text-slate-900">{plan.price}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feat, fidx) => (
                    <li key={fidx} className="flex gap-3 text-sm text-slate-600">
                      <Check size={18} className="text-blue-500 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-xl font-semibold transition-colors ${plan.highlight ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'}`}>
                  Assinar {plan.name}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Ainda tem dúvidas?</h2>
            <p className="text-lg text-slate-600">Tudo o que você precisa saber antes de mergulhar com a gente.</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="text-lg font-bold mb-2 text-slate-900">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Footer */}
      <section className="py-24 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold mb-6">Pronto para transformar sua relação com o mar?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Se ficou alguma dúvida, não deixe para depois. Mande uma mensagem para nós e faça parte do clube ainda hoje.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToPlans}
              className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-full font-bold text-lg transition-colors"
            >
              Ver Planos Novamente
            </button>
            <a
              href="https://wa.me/5511999999999?text=Oi!%20Tenho%20interesse%20no%20Clube%20dos%20Nadadores%20mas%20fiquei%20com%20uma%20dúvida."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-green-500 hover:bg-green-400 text-white rounded-full font-bold text-lg transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} /> Falar no WhatsApp
            </a>
          </div>

          {/* Social Share Section */}
          <div className="mt-16 pt-8 border-t border-blue-500/30">
            <p className="text-blue-200 mb-6 flex items-center justify-center gap-2 font-medium">
              <Share2 size={18} /> Compartilhe com outros nadadores
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href={`https://wa.me/?text=${encodeURIComponent('Dá uma olhada no Clube dos Nadadores Rota 55! Experiências incríveis no mar: https://thiagoacer.github.io/rota-55/')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-green-500 hover:text-white text-blue-100 rounded-full flex items-center justify-center transition-all"
                aria-label="Compartilhar no WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://thiagoacer.github.io/rota-55/')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-blue-800 hover:text-white text-blue-100 rounded-full flex items-center justify-center transition-all"
                aria-label="Compartilhar no Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://thiagoacer.github.io/rota-55/')}&text=${encodeURIComponent('Muito mais que um grupo de nadadores. Venha para o Rota 55!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-slate-900 hover:text-white text-blue-100 rounded-full flex items-center justify-center transition-all"
                aria-label="Compartilhar no Twitter/X"
              >
                <Twitter size={20} />
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent('https://thiagoacer.github.io/rota-55/')}&title=${encodeURIComponent('Clube dos Nadadores Rota 55')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-blue-700 hover:text-white text-blue-100 rounded-full flex items-center justify-center transition-all"
                aria-label="Compartilhar no LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
