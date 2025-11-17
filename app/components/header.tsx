export default function Header() {
  return (
    <header className="bg-white/5 border-white/10 border-b-2 backdrop-blur-2xl">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <a href="/" className="text-2xl font-bold">
          JY
        </a>
        <div className="space-x-4">
          <a href="/" className="hover:text-gray-300">Accueil</a>
          <a href="/projects" className="hover:text-gray-300">Projets</a>
          <a href="/contact" className="hover:text-gray-300">Contact</a>
        </div>
      </nav>
    </header>
  );
}