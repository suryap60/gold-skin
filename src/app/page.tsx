import Hero from '../components/sections/Hero';
import Marquee from '../components/sections/Marquee';
import Features from '../components/sections/Features';
import Services from '../components/sections/Services';
import Products from '../components/sections/Products';
import Testimonials from '../components/sections/Testimonials';
import Newsletter from '../components/sections/Newsletter';
import Footer from '../components/layouts/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Hero />
      <Marquee />
      <Features />
      <Services />
      <Products />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
