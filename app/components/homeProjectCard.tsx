import type { Project } from '~/types/project.types';

type CardProps = {
  project: Project;
};

// Apparence des cartes de projet sur la page d'accueil.
export function HomeProjectCard({ project }: CardProps) {
  return (
    <div className="border-white/10 bg-white/5 border-2 p-4 rounded-xl backdrop-blur-2xl overflow-hidden flex flex-col gap-2">
        <img 
        src={project.thumbnailUrl} 
        loading='lazy'
        alt={`Aperçu de ${project.title}`} 
        className="w-full h-40 object-cover rounded-lg" 
        />
      <div className="">
        <h3 className="text-lg font-bold text-white">{project.title}</h3>
        <p className="text-sm text-gray-400">{project.role}</p>
      </div>
    </div>
  );
}