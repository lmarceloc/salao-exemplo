import { Separator } from '@/components/ui/separator';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-bg-alt">
      {/* Top CTA stripe */}
      <div className="border-b border-gold/10 px-6 py-20 text-center lg:px-12">
        <p className="label-spaced mb-6 text-gold/60">Comece Sua Experiência</p>
        <h2 className="heading-display mb-8 text-4xl text-gold-light sm:text-5xl md:text-6xl">
          Reserve o Seu Momento
        </h2>
        <a
          href="https://wa.me/551199999999"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar pelo WhatsApp"
          className="inline-flex h-14 w-14 items-center justify-center border border-gold/50 text-gold transition-all hover:border-gold hover:bg-gold hover:text-dark-bg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>

      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <h3 className="heading-serif mb-4 text-2xl text-gold-light">Seu Salão</h3>
            <p className="body-elegant max-w-xs text-sm text-gold-light/40">
              A arte de revelar sua beleza singular. Excelência, discrição e maestria em cada atendimento.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="label-spaced mb-6 text-gold/50">Serviços</p>
            <ul className="flex flex-col gap-4">
              {[
                { label: 'Cabelo', href: '#cabelo' },
                { label: 'Unhas', href: '#unhas' },
                { label: 'Maquiagem', href: '#maquiagem' },
                { label: 'Portfólio', href: '#galeria' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="body-elegant text-sm text-gold-light/40 transition-colors hover:text-gold-light/80"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="label-spaced mb-6 text-gold/50">Contato</p>
            <address className="flex flex-col gap-4 not-italic">
              <p className="body-elegant text-sm text-gold-light/40">
                Rua Augusta, 2.100 <br />
                Jardins, São Paulo
              </p>
              <a
                href="mailto:contato@seusalao.com.br"
                className="body-elegant text-sm text-gold-light/40 transition-colors hover:text-gold-light/80"
              >
                contato@seusalao.com.br
              </a>
              <a
                href="tel:+551199999999"
                className="body-elegant text-sm text-gold-light/40 transition-colors hover:text-gold-light/80"
              >
                (11) 9 9999-9999
              </a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <Separator className="my-10 bg-gold/10" />

        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <p className="label-spaced text-gold-light/20">
            © {currentYear} Seu Salão. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            {['Política de Privacidade', 'Termos de Uso'].map((item) => (
              <a
                key={item}
                href="#"
                className="label-spaced text-gold-light/20 transition-colors hover:text-gold-light/50"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <p className="label-spaced mt-6 flex items-center justify-center gap-2 text-gold-light/20">
              Feito com
              <svg
                viewBox="0 0 16 12"
                width="14"
                height="11"
                aria-label="amor"
                style={{ imageRendering: 'pixelated', display: 'inline-block' }}
              >
                <rect x="2"  y="0" width="2" height="2" fill="#ef4444" />
                <rect x="4"  y="0" width="2" height="2" fill="#ef4444" />
                <rect x="10" y="0" width="2" height="2" fill="#ef4444" />
                <rect x="12" y="0" width="2" height="2" fill="#ef4444" />
                <rect x="0"  y="2" width="16" height="2" fill="#ef4444" />
                <rect x="0"  y="4" width="16" height="2" fill="#ef4444" />
                <rect x="2"  y="6" width="12" height="2" fill="#ef4444" />
                <rect x="4"  y="8" width="8"  height="2" fill="#ef4444" />
                <rect x="6"  y="10" width="4" height="2" fill="#ef4444" />
              </svg>
              por{' '}
              <a
                href="https://agenciabyte.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold-light/50"
              >
                Agência Byte
              </a>
        </p>
      </div>
    </footer>
  );
}
