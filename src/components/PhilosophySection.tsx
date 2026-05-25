export function PhilosophySection() {
  return (
    <section id="salao" className="bg-dark-bg py-32 md:py-40">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">

        {/* Decorative top rule */}
        <div className="mx-auto mb-10 flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-gold/40" />
          <p className="label-spaced text-gold/70">Nossa Filosofia</p>
          <span className="h-px w-10 bg-gold/40" />
        </div>

        {/* Large italic quote */}
        <blockquote className="heading-display mb-12 text-3xl text-gold-light sm:text-4xl md:text-5xl lg:text-6xl">
          "Cuidar é uma arte que se <br className="hidden md:block" />
          aperfeiçoa com o tempo."
        </blockquote>

        {/* Divider */}
        <span className="mx-auto mb-12 block h-px w-16 bg-gold/30" />

        {/* Body paragraph */}
        <p className="body-elegant mx-auto max-w-2xl text-base text-gold-light/60 sm:text-lg">
          A beleza que você carrega é singular. Nossa missão é revelá-la com
          precisão, delicadeza e profundo respeito pela sua identidade. Cada
          cliente que nos honra com sua presença traz consigo uma história
          única — e nós a escutamos, interpretamos e traduzimos em uma
          experiência de transformação que transcende o ordinário.
        </p>

        {/* Bottom accent figures */}
        <div className="mt-20 flex flex-wrap items-start justify-center gap-12 border-t border-gold/10 pt-16 md:gap-20">
          {[
            { num: '01', label: 'Escuta ativa e profunda' },
            { num: '02', label: 'Técnica apurada e contemporânea' },
            { num: '03', label: 'Resultado singular e duradouro' },
          ].map((item) => (
            <div key={item.num} className="flex flex-col items-center gap-3">
              <span className="heading-display text-5xl text-gold/20">{item.num}</span>
              <p className="label-spaced text-gold/50">{item.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
