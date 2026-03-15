'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function MetodyTerapeutyczne() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF8]">
      <Navbar />
      
      <section className="py-24 flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-16 uppercase tracking-widest border-b border-gray-300 pb-4 inline-block">
              METODY TERAPEUTYCZNE
            </h1>

            <div className="space-y-20">
              {/* EMDR */}
              <div id="emdr" className="scroll-mt-32">
                <h2 className="text-3xl font-serif text-[#4A6741] mb-6">Terapia EMDR</h2>
                <div className="prose prose-lg text-gray-700 leading-relaxed max-w-none">
                  <p>
                    Terapia EMDR (Eye Movement Desensitization and Reprocessing) stosowana jest w leczeniu zespołu stresu pourazowego (PTSD). Z czasem badania potwierdziły jej skuteczność w znacznie szerszym zakresie zaburzeń o podłożu lękowym, zaburzeń obsesyjno-kompulsywnych i depresji.
                  </p>
                  <p>
                    Od lat metodę tą stosuje się z powodzeniem w leczeniu psychologicznych traum, wynikających z różnego rodzaju trudnych doświadczeń tj. przemocy fizycznej lub psychicznej, zaniedbania, molestowania seksualnego, gwałtu, wypadków drogowych, klęsk żywiołowych, bycia świadkiem czyjejś śmierci lub towarzyszenie bliskim w chorobie i in.
                  </p>
                  <p>
                    EMDR to nowatorskie podejście do terapii osób z traumą rozwojową, depresją i lękiem. Jest to zalecana metoda terapii po traumatycznych przeżyciach, która pomaga mózgowi przetworzyć trudne wspomnienia, zmniejszając ich negatywny ładunek emocjonalny.
                  </p>
                </div>
              </div>

              {/* NARM */}
              <div id="narm" className="scroll-mt-32">
                <h2 className="text-3xl font-serif text-[#4A6741] mb-6">Terapia NARM</h2>
                <div className="prose prose-lg text-gray-700 leading-relaxed max-w-none">
                  <p>
                    NARM (NeuroAffective Relational Model) to metoda zajmująca się leczeniem traumy relacji i przywiązania.
                  </p>
                  <p>
                    Praca opiera się na wczesnych, nieświadomych wzorcach zerwania więzi. Może to mieć miejsce, gdy opiekun dziecka jest niedostępny fizycznie bądź emocjonalnie, cierpi na depresję, uzależnienia, stosuje przemoc, lub gdy dziecko przeżyło traumę bądź zaszły inne przeszkody na drodze do zbudowania bezpiecznej bliskości.
                  </p>
                  <p>
                    Te wczesne doświadczenia wpływają na naszą tożsamość, emocje, fizjologię oraz zachowania w dorosłym życiu. Terapia NARM pomaga w rozpoznaniu tych wzorców i budowaniu zdolności do zdrowej zależności i współzależności z innymi ludźmi, a także w nawiązaniu głębszego kontaktu ze swoim ciałem i emocjami.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-20 text-center">
              <Link 
                href="/#kontakt"
                className="inline-block bg-[#4A6741] text-white px-8 py-4 font-medium tracking-wider hover:bg-[#3A5233] transition-colors shadow-lg hover:shadow-xl"
              >
                UMÓW SIĘ NA KONSULTACJĘ
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
