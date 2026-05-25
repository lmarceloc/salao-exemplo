const testimonials = [
  {
    id: 1,
    quote:
      'Uma experiência que vai além do esperado. O cuidado com cada detalhe, desde a recepção até o resultado final, é algo que não encontro em nenhum outro lugar.',
    name: 'Fernanda A.',
    since: 'Cliente desde 2019',
  },
  {
    id: 2,
    quote:
      'Isabelle tem um talento único para entender o que você precisa antes mesmo que você saiba descrever. Cada visita é uma transformação real.',
    name: 'Carolina M.',
    since: 'Cliente desde 2020',
  },
  {
    id: 3,
    quote:
      'O ambiente, os profissionais e o resultado são de um nível absolutamente diferenciado. Não consigo imaginar confiar meu cabelo a mais ninguém.',
    name: 'Beatriz S.',
    since: 'Cliente desde 2018',
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-cream-deep py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Header */}
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="label-spaced mb-4 text-taupe">Experiências Reais</p>
            <h2 className="heading-display text-4xl text-charcoal sm:text-5xl md:text-6xl">
              O Que Dizem <br />Nossas Clientes
            </h2>
          </div>
          <span className="hidden h-px w-24 bg-gold/40 self-center md:block" />
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 gap-px bg-border-warm md:grid-cols-3">
          {testimonials.map((t, i) => (
            <article
              key={t.id}
              className="flex flex-col bg-cream-deep px-8 py-10 md:px-10 md:py-12"
            >
              {/* Number */}
              <span className="heading-display mb-8 block text-5xl text-gold/15">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Quote mark */}
              <span
                className="heading-display mb-4 block text-4xl leading-none text-gold/40"
                aria-hidden="true"
              >
                "
              </span>

              {/* Quote text */}
              <blockquote className="body-elegant mb-10 flex-1 text-base text-taupe">
                {t.quote}
              </blockquote>

              {/* Divider */}
              <span className="mb-6 block h-px w-8 bg-gold/40" />

              {/* Attribution */}
              <div>
                <p className="heading-serif text-sm text-charcoal">{t.name}</p>
                <p className="label-spaced mt-1 text-taupe/60">{t.since}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <p className="body-elegant mt-10 text-center text-xs text-taupe/50">
          Avaliação média 5.0 · Mais de 400 avaliações verificadas
        </p>

      </div>
    </section>
  );
}
