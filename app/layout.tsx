import type {Metadata} from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sans',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Anna Kupiec - Psychoterapia',
  description: 'Profesjonalny gabinet psychoterapii specjalizujący się w pracy z traumą relacyjną. Tworzymy bezpieczną przestrzeń do leczenia doświadczeń wynikających z trudnych relacji i więzi.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pl" className={`${inter.variable} ${cormorant.variable} scroll-smooth`}>
      <body className="font-sans bg-[#FAFAF8] text-gray-800 antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
