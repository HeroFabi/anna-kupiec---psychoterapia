'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function Warsztaty() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF8]">
      <Navbar />
      
      <section className="py-24 flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-16 uppercase tracking-widest border-b border-gray-300 pb-4 inline-block">
              WARSZTATY
            </h1>

            <div className="bg-white p-12 rounded-2xl shadow-xl border border-gray-100 max-w-2xl mx-auto">
              <h2 className="text-2xl font-serif text-[#4A6741] mb-6">Warsztaty Rozwojowe</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Obecnie nie prowadzimy zapisów na nowe warsztaty. Informacje o nadchodzących wydarzeniach i warsztatach rozwojowych pojawią się wkrótce na tej stronie.
              </p>
              <p className="text-gray-600 italic mb-10">
                Zapraszamy do kontaktu, jeśli jesteś zainteresowany/a udziałem w przyszłych edycjach.
              </p>
              
              <Link 
                href="/#kontakt"
                className="inline-block bg-[#4A6741] text-white px-8 py-3 font-medium tracking-wider hover:bg-[#3A5233] transition-colors shadow-md hover:shadow-lg"
              >
                SKONTAKTUJ SIĘ
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
