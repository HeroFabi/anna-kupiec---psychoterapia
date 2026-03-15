'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

interface MethodItem {
  name: string;
  description: string;
  linkHref?: string;
}

interface MethodsProps {
  data?: {
    title?: string;
    list?: MethodItem[];
  };
}

export default function Methods({ data }: MethodsProps) {
  const defaultMethods: MethodItem[] = [
    {
      name: "EMDR",
      description: "Terapia EMDR stosowana jest w leczeniu zespołu stresu pourazowego (PTSD). Z czasem badania potwierdziły jej skuteczność w znacznie szerszym zakresie zaburzeń o podłożu lękowym, zaburzeń obsesyjno-kompulsywnych i depresji. Od lat metodę tą stosuje się z powodzeniem w leczeniu psychologicznych traum, wynikających z różnego rodzaju trudnych doświadczeń tj. przemocy fizycznej lub psychicznej, zaniedbania, molestowania seksualnego, gwałtu, wypadków drogowych, klęsk żywiołowych, bycia świadkiem czyjejś śmierci lub towarzyszenie bliskim w chorobie i in.",
      linkHref: "/metody-terapeutyczne#emdr"
    },
    {
      name: "NARM",
      description: "Metoda zajmująca się leczeniem traumy relacji i przywiązania poprzez pracę nad wczesnymi nieświadomymi wzorcami zerwania więzi (np. gdy opiekun dziecka jest: niedostępny fizycznie bądź emocjonalnie, w depresji, w uzależnieniach, stosuje przemoc, dziecko przeżyło traume lub zaszły inne przeszkody na drodze do zbudowania bliskości), które wpływają na naszą tożsamość, emocje, fizjologię oraz zachowania.",
      linkHref: "/metody-terapeutyczne#narm"
    }
  ];

  const methodsList = data?.list || defaultMethods;

  return (
    <section className="py-24 bg-white" id="metody-pracy">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-16 uppercase tracking-widest border-b border-gray-300 pb-4 inline-block">
            {data?.title || "METODY PRACY"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
            {methodsList.map((method, index) => (
              <div key={index} className="bg-[#FAFAF8] p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
                <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6 text-center">{method.name}</h3>
                <p className="text-gray-700 leading-relaxed mb-8 flex-grow">
                  {method.description}
                </p>
                {method.linkHref && (
                  <div className="text-right mt-auto flex flex-col items-end">
                    <Link href={method.linkHref} className="text-[#4A6741] font-medium hover:text-[#3A5233] transition-colors inline-flex items-center group mb-2">
                      Zobacz więcej
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
