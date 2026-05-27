import { ImageIcon } from 'lucide-react';

export function ArtistSection() {
  return (
    <section id="artistas" className="bg-cream-base py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Section tag */}
        <div className="mb-16 flex items-center gap-4">
          <span className="h-px w-10 bg-gold/50" />
          {/* <p className="label-spaced text-taupe">Nossos Artistas</p> */}
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-28">

          {/* Left — Portrait placeholder */}
          <div className="relative">
            <div
              className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-cream-card"
              style={{ aspectRatio: '3/4', maxHeight: '680px' }}
            >
              {/* placeholder */}
              <div className="flex flex-col items-center gap-4">
                <div className="rounded-full border border-border-warm p-6">
                  <ImageIcon size={32} className="text-taupe/30" aria-hidden="true" />
                </div>
                <p className="label-spaced text-taupe/30">Retrato da Artista</p>
              </div>

              {/* Decorative frame corners */}
              <div className="absolute right-6 top-6 h-14 w-14 border-r-2 border-t-2 border-gold/30" />
              <div className="absolute bottom-6 left-6 h-14 w-14 border-b-2 border-l-2 border-gold/30" />
            </div>

            {/* Floating credential card */}
            <div className="absolute -bottom-6 -right-0 border border-border-warm bg-cream-base px-6 py-4 shadow-sm md:-right-8">
              <p className="label-spaced text-gold">Espaço Exclusivo</p>
              <p className="heading-serif mt-1 text-sm text-charcoal">Jardins · São Paulo</p>
            </div>

            {/* Background decorative square */}
            <div className="absolute -left-6 -top-6 -z-10 h-40 w-40 bg-cream-deep md:-left-10 md:-top-10" />
          </div>

          {/* Right — Text layout */}
          <div className="flex flex-col">
            {/* Tagline */}
            <p className="label-spaced mb-6 text-gold">Nossa Essência</p>

            {/* Headline */}
            <h2 className="heading-display mb-2 text-4xl text-charcoal sm:text-5xl lg:text-6xl">
              Beleza como <br />
              <span className="text-taupe/60">experiência,</span> <br />
              não serviço.
            </h2>

            {/* Rule */}
            <span className="mb-8 mt-8 block h-px w-12 bg-gold/50" />

            {/* Body */}
            <p className="body-elegant mb-8 text-base text-taupe">
              Nascemos da convicção de que cada visita deve ser memorável. Nosso
              espaço nos Jardins foi pensado para isso — um ambiente onde o ritmo
              desacelera, os detalhes importam e o cuidado com você começa antes
              mesmo de sentar na cadeira.
            </p>

            <p className="body-elegant mb-12 text-base text-taupe">
              Nossa equipe é formada por profissionais apaixonadas pelo que fazem,
              constantemente atualizadas nas técnicas mais avançadas do mercado.
              O resultado é um atendimento que une maestria técnica e escuta
              genuína — porque entender quem você é faz parte do serviço.
            </p>

            {/* Rule */}
            <span className="mb-8 block h-px w-full bg-border-warm" />

            {/* Numbers */}
            <div className="flex flex-wrap gap-10">
              <div>
                <p className="heading-serif text-xl text-charcoal">12+</p>
                <p className="label-spaced mt-1 text-taupe">Anos no Mercado</p>
              </div>
              <div>
                <p className="heading-serif text-xl text-charcoal">2.800+</p>
                <p className="label-spaced mt-1 text-taupe">Clientes Exclusivas</p>
              </div>
              <div>
                <p className="heading-serif text-xl text-charcoal">100%</p>
                <p className="label-spaced mt-1 text-taupe">Personalizado</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
