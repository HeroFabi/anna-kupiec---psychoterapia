'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'GŁÓWNA', href: '/' },
    { name: 'O MNIE', href: isHomePage ? '#o-mnie' : '/#o-mnie' },
    { name: 'METODY TERAPEUTYCZNE', href: '/metody-terapeutyczne' },
    { name: 'WARSZTATY', href: '/warsztaty' },
    { name: 'CENNIK', href: isHomePage ? '#cennik' : '/#cennik' },
    { name: 'KONTAKT', href: isHomePage ? '#kontakt' : '/#kontakt' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-serif text-2xl tracking-wide text-gray-900">
              Anna Kupiec
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors tracking-wider"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-green-700 hover:bg-gray-50 rounded-md"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
