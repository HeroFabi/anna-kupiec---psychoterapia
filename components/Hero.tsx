'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { urlFor } from '@/sanity/lib/image';

interface HeroProps {
  data?: any;
}

export default function Hero({ data }: HeroProps) {
  const bgImage = data?.backgroundImage 
    ? urlFor(data.backgroundImage).url() 
    : "/images/Góry_bez_czlowieka.jpg";

  return (
    <section className="relative w-full flex flex-col" id="start">
      {/* Background Image - No Overlay */}
      <div className="relative w-full h-[80vh] min-h-[500px]">
        <Image
          src={bgImage}
          alt={data?.title || "Główny baner gabinetu psychoterapii"}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Strip */}
      <div className="bg-[#4A6741] text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-3 leading-tight">
              {data?.title || "WITAMY W PROFESJONALNYM GABINECIE PSYCHOTERAPII"}
            </h1>
            <p className="text-base md:text-lg mb-3 font-medium text-white/90">
              {data?.subtitle || "specjalizującym się w pracy z traumą relacyjną."}
            </p>
            <p className="text-sm md:text-base mb-6 italic text-white/80 max-w-2xl mx-auto">
              {data?.description || "Tworzymy bezpieczną przestrzeń do leczenia doświadczeń wynikających z trudnych relacji i więzi."}
            </p>
            
            <Link 
              href="#kontakt"
              className="inline-block bg-white text-[#4A6741] px-8 py-3 font-medium tracking-wider hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
            >
              {data?.buttonText || "ZAPYTAJ O TERMIN"}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
