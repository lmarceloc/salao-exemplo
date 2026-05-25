import { Button } from '@/components/ui/button';
import { ImageIcon } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-cream-base pt-16 md:pt-20">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl grid-cols-1 items-center gap-0 px-6 lg:grid-cols-[1fr_1fr] lg:px-12 xl:grid-cols-[55fr_45fr]">

        {/* Left — Text Block */}
        <div className="flex flex-col justify-center py-16 lg:py-24 lg:pr-16 xl:pr-24">
          {/* Editorial tag */}
          <p className="label-spaced mb-10 text-taupe">
            Beleza · Exclusividade · Arte
          </p>

          {/* Main headline */}
          <h1 className="mb-8 font-sans text-5xl font-extralight leading-tight tracking-wide text-charcoal sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            A Arte de <br />
            Revelar Sua <br />
            <span className="text-gold">Beleza Única</span>
          </h1>

          {/* Subline */}
          <p className="body-elegant mb-12 max-w-md text-lg text-taupe">
            Onde a maestria encontra a sua essência. Cuidado singular para
            aquelas que valorizam o extraordinário em cada detalhe.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-5">
            <Button
              size="lg"
              className="label-spaced rounded-none bg-charcoal px-8 py-4 text-cream-base transition-all hover:bg-dark-bg-alt"
            >
              Agendar Consulta
            </Button>
            <a
              href="#cabelo"
              className="label-spaced text-taupe underline-offset-4 transition-colors hover:text-charcoal hover:underline"
            >
              Nossos Serviços
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex items-center gap-8 border-t border-border-warm pt-8">
            <div>
              <p className="heading-serif text-2xl text-charcoal">12+</p>
              <p className="label-spaced mt-1 text-taupe">Anos de Excelência</p>
            </div>
            <div className="h-8 w-px bg-border-warm" />
            <div>
              <p className="heading-serif text-2xl text-charcoal">2.800+</p>
              <p className="label-spaced mt-1 text-taupe">Clientes Exclusivos</p>
            </div>
            <div className="h-8 w-px bg-border-warm" />
            <div>
              <p className="heading-serif text-2xl text-charcoal">100%</p>
              <p className="label-spaced mt-1 text-taupe">Satisfação Garantida</p>
            </div>
          </div>
        </div>

        {/* Right — Image Placeholder */}
        <div className="relative hidden lg:flex lg:h-full lg:items-stretch">
          {/* Main image box */}
          <div className="relative flex w-full flex-col overflow-hidden bg-cream-card" style={{ minHeight: '70vh' }}>
            {/* Placeholder content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="rounded-full border border-border-warm/60 p-5">
                <ImageIcon
                  size={28}
                  className="text-taupe/50"
                  aria-hidden="true"
                />
              </div>
              <p className="label-spaced text-taupe/40">Imagem do Salão</p>
            </div>

            {/* Decorative corner accent */}
            <div className="absolute right-6 top-6 h-12 w-12 border-r border-t border-gold/40" />
            <div className="absolute bottom-6 left-6 h-12 w-12 border-b border-l border-gold/40" />
          </div>

          {/* Floating editorial tag */}
          <div className="absolute -bottom-4 -left-8 border border-border-warm bg-cream-base px-6 py-4 shadow-sm">
            <p className="label-spaced text-taupe">Experiência Premium</p>
            <p className="heading-serif mt-1 text-sm text-charcoal">Jardins · São Paulo</p>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <div className="h-8 w-px animate-pulse bg-gold/40" />
      </div>
    </section>
  );
}
