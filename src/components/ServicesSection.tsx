import { ImageIcon } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  tagline: string;
  index: number;
}

function ServiceCard({ id, title, description, tagline, index }: ServiceCardProps) {
  return (
    <article
      id={id}
      className="group flex flex-col bg-cream-base transition-shadow hover:shadow-md"
    >
      {/* Image placeholder */}
      <div className="relative flex aspect-[3/4] flex-col items-center justify-center overflow-hidden bg-cream-card">
        <div className="flex flex-col items-center gap-3 transition-transform group-hover:scale-95 duration-500">
          <div className="rounded-full border border-border-warm/80 p-4">
            <ImageIcon size={22} className="text-taupe/40" aria-hidden="true" />
          </div>
          <p className="label-spaced text-taupe/30">{title}</p>
        </div>

        {/* Number badge */}
        <span className="heading-display absolute bottom-4 right-5 text-6xl text-charcoal/5">
          {String(index).padStart(2, '0')}
        </span>

        {/* Corner accents */}
        <div className="absolute right-4 top-4 h-8 w-8 border-r border-t border-gold/30 transition-opacity group-hover:opacity-100 opacity-50" />
        <div className="absolute bottom-4 left-4 h-8 w-8 border-b border-l border-gold/30 transition-opacity group-hover:opacity-100 opacity-50" />
      </div>

      {/* Card content */}
      <div className="flex flex-1 flex-col px-6 py-8">
        <span className="label-spaced mb-4 text-gold">
          {String(index).padStart(2, '0')} — {tagline}
        </span>
        <h3 className="heading-serif mb-4 text-2xl text-charcoal">{title}</h3>
        <span className="mb-5 block h-px w-8 bg-gold/50" />
        <p className="body-elegant text-sm text-taupe leading-relaxed">{description}</p>

        <a
          href="#"
          className="label-spaced mt-8 inline-flex items-center gap-2 text-charcoal/50 transition-all hover:text-charcoal hover:gap-3"
          aria-label={`Saiba mais sobre ${title}`}
        >
          Descobrir
          <span className="block h-px w-6 bg-current transition-all" />
        </a>
      </div>
    </article>
  );
}

const services: ServiceCardProps[] = [
  {
    id: 'cabelo',
    title: 'Cabelo',
    tagline: 'Tratamentos Capilares',
    description:
      'Elevamos o padrão do cuidado pessoal. Excelência em cada detalhe do seu tratamento capilar, do corte à coloração, com técnicas de vanguarda e produtos de alta performance.',
    index: 1,
  },
  {
    id: 'unhas',
    title: 'Unhas',
    tagline: 'Nail Art & Manicure',
    description:
      'Perfeição artesanal para suas mãos e pés. Cada sessão é um ritual de cuidado com produtos premium e técnicas refinadas que revelam elegância em cada detalhe.',
    index: 2,
  },
  {
    id: 'maquiagem',
    title: 'Maquiagem',
    tagline: 'Beauty & Make-up',
    description:
      'A arte de realçar sua beleza natural. Nossa equipe de artistas utiliza paletas exclusivas e técnicas editoriais para criar looks que expressam a sua essência única.',
    index: 3,
  },
];

export function ServicesSection() {
  return (
    <section className="bg-cream-deep py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Section header */}
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label-spaced mb-4 text-taupe">O Que Oferecemos</p>
            <h2 className="heading-display text-4xl text-charcoal sm:text-5xl md:text-6xl">
              Nossos <br />Serviços
            </h2>
          </div>
          <p className="body-elegant max-w-xs text-sm text-taupe md:text-right">
            Uma curadoria de experiências de beleza pensadas para o seu mais alto nível de satisfação.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 gap-px bg-border-warm sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>

      </div>
    </section>
  );
}
