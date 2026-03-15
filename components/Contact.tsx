'use client';

import { motion } from 'motion/react';

interface ContactProps {
  data?: {
    title?: string;
    address?: string;
    googleMapsLink?: string;
    phone?: string;
  };
}

export default function Contact({ data }: ContactProps) {
  return (
    <section className="py-24 bg-white" id="kontakt">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-16 uppercase tracking-widest border-b border-gray-300 pb-4 inline-block">
            {data?.title || "KONTAKT"}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Contact Info */}
            <div className="bg-[#FAFAF8] p-10 rounded-2xl shadow-sm border border-gray-100 text-left flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 uppercase tracking-wider">
                Dane kontaktowe:
              </h3>
              <div className="space-y-6 text-lg">
                <div className="flex items-start group">
                  <div className="w-1.5 h-1.5 rounded-full bg-black mt-2.5 mr-4 flex-shrink-0" />
                  <a 
                    href={data?.googleMapsLink || "https://maps.google.com/?q=ul. Mickiewicza 24/4c, Poznań"} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#4A6741] font-medium hover:underline transition-all"
                  >
                    {data?.address || "ul. Mickiewicza 24/4c, Poznań"}
                  </a>
                </div>
                <div className="flex items-start group">
                  <div className="w-1.5 h-1.5 rounded-full bg-black mt-2.5 mr-4 flex-shrink-0" />
                  <a 
                    href={`tel:${data?.phone?.replace(/\s/g, '') || '609048100'}`} 
                    className="text-[#4A6741] font-medium hover:underline transition-all"
                  >
                    {data?.phone ? `tel. ${data.phone}` : "tel. 609 048 100"}
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-[350px] lg:h-auto min-h-[300px] rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.789188388676!2d16.90632899916133!3d52.41049679992144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045b354ead2ff9%3A0xa07d52204a58bfa!2sAdama%20Mickiewicza%2024%2F4c%2C%2060-835%20Pozna%C5%84!5e0!3m2!1spl!2spl!4v1773569764261!5m2!1spl!2spl" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokalizacja gabinetu"
              />
            </div>
          </div>

          <div className="bg-white p-12 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-serif text-gray-900 mb-8">
              Formularz kontaktowy
            </h3>
            <form className="space-y-6 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Imię i nazwisko</label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4A6741] focus:border-transparent transition-shadow outline-none" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Adres e-mail</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4A6741] focus:border-transparent transition-shadow outline-none" required />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Numer telefonu</label>
                <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4A6741] focus:border-transparent transition-shadow outline-none" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Wiadomość</label>
                <textarea id="message" name="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4A6741] focus:border-transparent transition-shadow outline-none resize-none" required></textarea>
              </div>
              <div className="text-center pt-4">
                <button type="submit" className="bg-[#4A6741] text-white px-10 py-4 font-medium tracking-wider hover:bg-[#3A5233] transition-colors shadow-md hover:shadow-lg w-full md:w-auto">
                  WYŚLIJ WIADOMOŚĆ
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
