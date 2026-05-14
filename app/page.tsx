import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TrustSignals from '@/components/TrustSignals';
import Services from '@/components/Services';
import MedicalSupport from '@/components/MedicalSupport';
import ClientResults from '@/components/ClientResults';
import About from '@/components/About';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Navigation />
      <main>
        <Hero />
        <TrustSignals />
        <Services />
        <MedicalSupport />
        <ClientResults />
        <About />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
