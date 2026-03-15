'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';

interface ForWhomCard {
  image?: any;
  title?: string;
  description?: string;
  list?: string[];
  buttonText?: string;
  buttonLink?: string;
  highlightedFooter?: string;
}

interface ForWhomProps {
  data?: {
    cards?: ForWhomCard[];
  }
}

export default function ForWhom({ data }: ForWhomProps) {
  const defaultCards = [
    {
      image: "/images/osoba_na_terapii.jpg",
      title: "DLA KOGO",
      description: "W zakresie spotkań terapeutycznych znajduje się:",
      list: [
        "psychoterapia indywidualna, dorosłych, młodzieży",
        "psychoterapia par",
        "psychoterapia całych rodzin",
        "psychoterapia grupowa",
        "warsztaty rozwojowe"
      ],
      highlightedFooter: "Pracuję również z osobami neuroróżnorodnymi."
    },
    {
      image: "/images/osoba_na_terapii.jpg",
      title: "Gotowy, by zrobić pierwszy krok?",
      description: "Wystarczy wiadomość, e-mail lub telefon, aby umówić się na pierwsze spotkanie. Możesz wybrać sesje w gabinecie lub online – tak, jak będzie dla Ciebie najbardziej komfortowo.",
      buttonText: "UMÓW WIZYTĘ",
      buttonLink: "#kontakt"
    },
    {
      image: "/images/Relaksująca.jpg",
      title: "Denerwujesz się na samą myśl o rozpoczęciu terapii?",
      description: "To częste uczucie. Moim celem jest stworzenie swobodnej i bezpiecznej atmosfery, w której rozmowa i praca nad sobą będą możliwie najbardziej komfortowe. Zanim zdecydujesz się na terapie, możesz skorzystać z konsultacji wstępnych.",
      buttonText: "CZYTAJ DALEJ",
      buttonLink: "#o-mnie"
    }
  ];

  const cards = data?.cards || defaultCards;

  const getCardClasses = (index: number) => {
    if (index === 1) return "flex flex-col items-center border-y md:border-y-0 md:border-x border-gray-100 py-12 md:py-0 md:px-8";
    return "flex flex-col items-center";
  };

  return (
    <section className="py-24 bg-[#FAFAF8]" id="dla-kogo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          
          {cards.map((card, index) => {
            const imgSrc = card.image?.asset ? urlFor(card.image).url() : (typeof card.image === 'string' ? card.image : "/images/osoba_na_terapii.jpg");
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 * (index + 1) }}
                className={getCardClasses(index)}
              >
                <div className="relative w-full aspect-square max-w-[240px] overflow-hidden shadow-lg mb-8 border-4 border-white">
                  <Image
                    src={imgSrc}
                    alt={card.title || "Zdjęcie"}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {card.title && (
                  <h3 className={`font-serif text-gray-900 mb-6 ${index === 0 ? 'text-2xl uppercase tracking-widest' : 'text-2xl leading-tight'}`}>
                    {card.title}
                  </h3>
                )}
                
                {card.description && (
                  <p className={index === 0 ? "text-gray-700 font-medium mb-4 underline underline-offset-4 decoration-gray-300" : "text-gray-600 leading-relaxed mb-8"}>
                    {card.description}
                  </p>
                )}

                {card.list && card.list.length > 0 && (
                  <ul className="text-gray-600 space-y-3 mb-10 text-left inline-block">
                    {card.list.map((item, i) => (
                      <li key={i} className="flex items-start group">
                        <div className="w-1.5 h-1.5 rounded-full bg-black mt-2 mr-3 flex-shrink-0 transition-transform group-hover:scale-125" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {card.highlightedFooter && (
                  <p className="text-[#4A6741] font-bold mt-auto">
                    {card.highlightedFooter}
                  </p>
                )}

                {card.buttonText && card.buttonLink && (
                  <Link 
                    href={card.buttonLink}
                    className={
                      index === 1 
                      ? "mt-auto inline-block bg-[#4A6741] text-white px-8 py-3 font-medium tracking-wider hover:bg-[#3A5233] transition-colors shadow-md hover:shadow-lg"
                      : "mt-auto inline-block border-2 border-[#4A6741] text-[#4A6741] px-8 py-3 font-medium tracking-wider hover:bg-[#4A6741] hover:text-white transition-colors shadow-sm"
                    }
                  >
                    {card.buttonText}
                  </Link>
                )}
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
