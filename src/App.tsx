import { Analytics } from '@vercel/analytics/react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ArtistSection } from '@/components/ArtistSection';
import { GallerySection } from '@/components/GallerySection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-cream-base">
      {/* Skip to content — visível apenas no foco (teclado/leitor de tela) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-charcoal focus:text-cream-base focus:px-4 focus:py-2 focus:text-xs focus:tracking-widest focus:uppercase"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <ServicesSection />
        <ArtistSection />
        <GallerySection />
        <TestimonialsSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <Analytics />
    </div>
  );
}

export default App;
