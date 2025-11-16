import type { Route } from "./+types/projects";
import { useState } from 'react';
import { useProjects } from '~/hooks/useProjects'; // NOTRE HOOK
import { ProjectFilters } from '~/components/projectFilters'; // NOTRE FRONT-END
import { ProjectCard } from '~/components/projectCard'; // NOTRE FRONT-END

//Meta description et titre
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Projets - JY" },
    { name: "description", content: "Découvrez tous les projets de Jayden Labelle." },
  ];
}

// Le composant "Conteneur"
export default function ProjectsPage() {
  // --- LOGIQUE D'ÉTAT (simple) ---
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTool, setSelectedTool] = useState<string>("all");

  // --- LOGIQUE DE DONNÉES (cachée dans le hook) ---
  const { loading, filteredProjects } = useProjects(selectedCategory, selectedTool);

  // --- AFFICHAGE (délégué aux composants) ---
  if (loading) {
    return <div className="text-white">Chargement des projets...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">Mes Projets</h1>
      
      {/* Composant de Présentation pour les filtres */}
      <ProjectFilters
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedTool={selectedTool}
        onToolChange={setSelectedTool}
      />
      
      {/* Composant de Présentation pour la grille */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map(project => (
            <ProjectCard key={project.slug} project={project} />
          ))
        ) : (
          <p className="text-gray-400 col-span-2">Aucun projet ne correspond à vos filtres.</p>
        )}
      </div>
    </div>
  );
}
