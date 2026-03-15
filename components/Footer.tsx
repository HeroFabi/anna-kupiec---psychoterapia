export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 text-center text-sm border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="mb-4 font-serif text-lg text-gray-300 tracking-wider">Anna Kupiec - Psychoterapia</p>
        <p>&copy; {new Date().getFullYear()} Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
}
