export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white shadow-lg">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="space-x-4">
          <a href="/" className="hover:text-gray-300">Accueil</a>
          <a href="/projets" className="hover:text-gray-300">Projets</a>
          <a href="/contact" className="hover:text-gray-300">Contact</a>
        </div>
      </nav>
    </footer>
  );
}