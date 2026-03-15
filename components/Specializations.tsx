'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { urlFor } from '@/sanity/lib/image';

interface SpecializationsProps {
  data?: any;
}

export default function Specializations({ data }: SpecializationsProps) {
  const defaultList = [
    "Trauma/cPTSD/PTSD",
    "Problemy w związkach, trudności w budowaniu bliskich relacji",
    "Depresja i inne zaburzenia nastroju",
    "Zaburzenia lękowe",
    "Problemy z odżywianiem",
    "Dolegliwości psychosomatyczne",
    "Przewlekły stres",
    "Żałoba, strata, trudne zmiany",
    "Trudności w znalezieniu sensu życia"
  ];

  const specializationsList = data?.list || defaultList;
  const imgSrc = data?.image ? urlFor(data.image).url() : "/images/Roslina__1.jpg";

  return (
    <section className="py-24 bg-white" id="specjalizacje">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-[#4A6741] mb-8 uppercase tracking-wide border-b-2 border-[#4A6741]/20 pb-4 inline-block">
              {data?.title || "OBSZARY SPECJALIZACJI"}
            </h2>
            <ul className="space-y-4">
              {specializationsList.map((spec: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#4A6741] mr-3 mt-1">•</span>
                  <span className="text-lg text-gray-700 font-medium">{spec}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src={imgSrc}
              alt="Roslina symbolizująca rozwój i terapię"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
