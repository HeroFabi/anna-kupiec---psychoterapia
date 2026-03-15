'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { urlFor } from '@/sanity/lib/image';

interface AboutProps {
  data?: any;
}

export default function About({ data }: AboutProps) {
  const imgSrc = data?.image ? urlFor(data.image).url() : "/images/TOP_1.jpg";
  const defaultParagraphs = [
    "Jestem magistrem psychologii klinicznej oraz magistrem informatyki w naukach eksperymentalnych. Poszukuję jak najbardziej skutecznych metod rozwiązywania problemów psychologicznych, wykorzystując do tego najnowsze badania naukowe.",
    "Specjalizuję się w psychoterapii traum rozwojowych oraz szokowych."
  ];

  const defaultBullets = [
    "4-letni kurs Psychoterapii Systemowej Rodzin w Ośrodku Szkoleń Systemowych w Krakowie,",
    "Ukończyłam pierwsze w Polsce 2-letnie szkolenie z terapii traumy relacji: przywiązania i więzi NARM",
    "EMDR - Eye Movement Desensitization and Reprocessing – nowatorskie podejście do terapii osób z traumą rozwojową, depresją i lękiem. EMDR jest zalecaną metodą terapii po traumatycznych przeżyciach."
  ];

  const paragraphs = data?.paragraphs || defaultParagraphs;
  const bulletPoints = data?.bulletPoints || defaultBullets;

  return (
    <section className="py-24 bg-white" id="o-mnie">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden shadow-2xl border-4 border-[#FAFAF8]">
              <Image
                src={imgSrc}
                alt="Anna Kupiec - Psychoterapeuta"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8 uppercase tracking-widest border-b border-gray-300 pb-4 inline-block">
              {data?.title || "O MNIE"}
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4 underline underline-offset-4 decoration-gray-300">
              {data?.subtitle || "Doświadczenie zawodowe:"}
            </h3>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed mb-10">
              {paragraphs.map((p: string, idx: number) => (
                <p key={idx} className={idx === paragraphs.length - 1 ? "font-medium text-[#4A6741]" : ""}>
                  {p}
                </p>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-6 uppercase tracking-wider">
              {data?.bulletListTitle || "UKOŃCZYŁAM"}
            </h3>
            
            <ul className="space-y-5 text-gray-700 mb-12">
              {bulletPoints.map((bullet: string, idx: number) => (
                <li key={idx} className="flex items-start group">
                  <div className="w-1.5 h-1.5 rounded-full bg-black mt-2.5 mr-4 flex-shrink-0 transition-transform group-hover:scale-125" />
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
