import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Specializations from '@/components/Specializations';
import Symptoms from '@/components/Symptoms';
import Methods from '@/components/Methods';
import About from '@/components/About';
import ForWhom from '@/components/ForWhom';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { getHomepageData } from '@/sanity/lib/queries';

export default async function Home() {
  const data = await getHomepageData();

  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF8]">
      <Navbar />
      <Hero data={data?.hero} />
      <Specializations data={data?.specializations} />
      <Symptoms data={data?.symptoms} />
      <Methods data={data?.methods} />
      <ForWhom data={data?.forWhom} />
      <About data={data?.about} />
      <Pricing data={data?.pricing} />
      <Contact data={data?.contact} />
      <Footer />
    </main>
  );
}
