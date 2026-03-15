'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { urlFor } from '@/sanity/lib/image';

interface SymptomsProps {
  data?: any;
}

export default function Symptoms({ data }: SymptomsProps) {
  const defaultSymptoms = [
    "Unikasz kontaktu z innymi ludźmi",
    "Czujesz lęk w relacjach z ludźmi",
    "Przejawiasz bierną postawę w związku",
    "Zrywasz relację z niewiadomych powodów",
    "Jesteś agresywny w relacjach",
    "Czujesz zawstydzenie, poczucie winy",
    "Masz niskie poczucie wartości",
    "Nie jesteś w kontakcie ze swoim ciałem i swoimi emocjami",
    "Nie jesteś zdolny do zdrowej zależności i współzależności z innymi ludźmi",
    "Nie umiesz stawiać granic",
    "Przejawiasz nadmiarowe wymagania i roszczenia w stosunku do partnera"
  ];

  const symptomsList = data?.list || defaultSymptoms;
  const imgSrc = data?.image ? urlFor(data.image).url() : "/images/TOP_1.jpg";

  return (
    <section className="py-24 bg-[#FAFAF8]" id="objawy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1"
          >
            <Image
              src={imgSrc}
              alt="Obraz prezentujący obszary problematyczne w terapii"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8 tracking-wide border-b-2 border-gray-200 pb-4 inline-block">
              {data?.title || "CZY CZĘSTO..."}
            </h2>
            <ul className="space-y-4">
              {symptomsList.map((symptom: string, index: number) => (
                <li key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <span className="text-[#4A6741] mr-3 mt-1 font-bold">-</span>
                  <span className="text-lg text-gray-700">{symptom}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
