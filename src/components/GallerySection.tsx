interface GalleryItemProps {
  label: string;
  category: string;
  src: string;
  tall?: boolean;
}

function GalleryItem({ label, category, src, tall }: GalleryItemProps) {
  return (
    <article
      className={`group relative overflow-hidden bg-cream-card ${tall ? 'row-span-2' : ''}`}
    >
      {/* Image */}
      <img
        src={src}
        alt={label}
        className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${tall ? 'aspect-[3/4]' : 'aspect-square'}`}
        loading="lazy"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-dark-bg/80 via-dark-bg/20 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <p className="label-spaced text-gold">{category}</p>
        <p className="heading-serif mt-1 text-sm text-gold-light">{label}</p>
      </div>

      {/* Corner accent — visible on hover */}
      <div className="absolute right-4 top-4 h-8 w-8 border-r border-t border-gold/0 transition-all duration-500 group-hover:border-gold/60" />

      {/* Aspect ratio spacer */}
      <div className={tall ? 'aspect-[3/4]' : 'aspect-square'} />
    </article>
  );
}

const items: (GalleryItemProps & { id: number })[] = [
  {
    id: 1,
    label: 'Mechas Clássicas',
    category: 'Cabelo',
    src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&w=800&q=80',
    tall: true,
  },
  {
    id: 2,
    label: 'Nail Art Delicada',
    category: 'Unhas',
    src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&w=600&q=80',
  },
  {
    id: 3,
    label: 'Make Editorial',
    category: 'Maquiagem',
    src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&w=600&q=80',
  },
  {
    id: 4,
    label: 'Corte Estruturado',
    category: 'Cabelo',
    src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&w=600&q=80',
  },
  {
    id: 5,
    label: 'Coloração Balayage',
    category: 'Cabelo',
    src: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&w=800&q=80',
    tall: true,
  },
  {
    id: 6,
    label: 'Manicure Francesa',
    category: 'Unhas',
    src: 'https://images.unsplash.com/photo-1604902396830-aca29e19b067?auto=format&w=600&q=80',
  },
  {
    id: 7,
    label: 'Make Noiva',
    category: 'Maquiagem',
    src: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&w=600&q=80',
  },
];

export function GallerySection() {
  return (
    <section id="galeria" className="bg-cream-base py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Header */}
        <div className="mb-16 grid grid-cols-1 items-end gap-8 md:grid-cols-2">
          <div>
            <p className="label-spaced mb-4 text-taupe">Nosso Portfólio</p>
            <h2 className="heading-display text-4xl text-charcoal sm:text-5xl md:text-6xl">
              Arte em <br />Cada Trabalho
            </h2>
          </div>
          <p className="body-elegant text-sm text-taupe md:text-right md:max-w-xs md:ml-auto">
            Uma seleção das transformações realizadas por nossa equipe. Cada peça reflete
            o compromisso com a excelência e o olhar singular que nos define.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 gap-px bg-border-warm lg:grid-cols-4">
          {items.map((item) => (
            <GalleryItem key={item.id} {...item} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="label-spaced inline-flex items-center gap-3 border border-charcoal/30 px-10 py-4 text-charcoal transition-all hover:border-charcoal hover:bg-charcoal hover:text-cream-base"
          >
            Ver Portfólio Completo
            <span className="block h-px w-6 bg-current" />
          </a>
        </div>

      </div>
    </section>
  );
}
