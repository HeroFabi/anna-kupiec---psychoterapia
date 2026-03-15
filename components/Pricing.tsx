'use client';

import { motion } from 'motion/react';

interface PricingItem {
  name: string;
  price: string;
  duration: string;
}

interface PricingProps {
  data?: {
    title?: string;
    packages?: PricingItem[];
    descriptionParagraphs?: string[];
    highlightedText?: string;
  };
}

export default function Pricing({ data }: PricingProps) {
  const defaultPrices: PricingItem[] = [
    { name: "Psychoterapia indywidualna", price: "230 zł", duration: "50 minut" },
    { name: "Psychoterapia indywidualna EMDR", price: "230 zł", duration: "50 minut" },
    { name: "Psychoterapia pary", price: "250 zł", duration: "50 minut" },
    { name: "Psychoterapia rodziny", price: "300 zł", duration: "90 minut" },
  ];

  const defaultDescriptions = [
    "Psychoterapia indywidualna, pary, rodziny – to spotkania z psychoterapeutą, które odbywają się w określonej częstotliwości ustalonej między terapeuta a klientem.",
    "Psychoterapia jest poprzedzona konsultacją wstępną.",
    "Konsultacja – kilka spotkań, z reguły 1 do 3, które pozwalają klientowi i terapeucie określić cel terapii oraz oczekiwane zmiany."
  ];

  const packagesList = data?.packages || defaultPrices;
  const descriptionParagraphs = data?.descriptionParagraphs || defaultDescriptions;

  return (
    <section className="py-24 bg-[#FAFAF8]" id="cennik">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-16 uppercase tracking-widest border-b border-gray-300 pb-4 inline-block">
            {data?.title || "CENNIK"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {packagesList.map((item, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-8 bg-white border border-gray-100 shadow-sm">
                <h3 className="text-xl md:text-2xl font-serif text-gray-900 mb-2">{item.name}</h3>
                <p className="text-[#4A6741] font-medium text-lg">
                  {item.price} <span className="text-gray-500 font-normal">/ {item.duration}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 text-gray-700 leading-relaxed space-y-6 text-lg">
            {descriptionParagraphs.map((desc: string, index: number) => (
              <p key={index}>{desc}</p>
            ))}
            <p className="font-bold text-gray-900 tracking-wide uppercase mt-8">
              {data?.highlightedText || "SPOTKANIA MOGĄ ODBYWAĆ SIĘ RÓWNIEŻ ONLINE."}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
