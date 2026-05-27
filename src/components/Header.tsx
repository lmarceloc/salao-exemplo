import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Cabelo', href: '#cabelo' },
  { label: 'Unhas', href: '#unhas' },
  { label: 'Maquiagem', href: '#maquiagem' },
  { label: 'Portfólio', href: '#galeria' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border-warm/60 bg-cream-base/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Brand */}
          <a
            href="#"
            className="heading-serif text-xl text-charcoal transition-opacity hover:opacity-70 md:text-2xl"
            aria-label="Seu Salão - Página inicial"
          >
            Seu Salão
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-10 md:flex" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="label-spaced text-taupe transition-colors hover:text-charcoal"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              className="label-spaced rounded-none border-charcoal/40 bg-transparent px-6 py-2 text-charcoal transition-all hover:border-charcoal hover:bg-charcoal hover:text-cream-base"
            >
              Agendamento
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="flex items-center text-charcoal md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — animado com grid-rows para transição natural de altura */}
      <div
        className={`grid md:hidden transition-all duration-300 ease-out ${
          mobileOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="border-t border-border-warm/60 bg-cream-base px-6 py-6">
            <nav className="flex flex-col gap-5" aria-label="Navegação mobile">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="label-spaced text-taupe transition-colors duration-150 hover:text-charcoal focus-visible:text-charcoal focus-visible:outline-none"
                  onClick={() => setMobileOpen(false)}
                  tabIndex={mobileOpen ? 0 : -1}
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant="outline"
                className="label-spaced mt-2 w-full rounded-none border-charcoal/40 bg-transparent py-3 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-cream-base"
                tabIndex={mobileOpen ? 0 : -1}
              >
                Agendamento
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
