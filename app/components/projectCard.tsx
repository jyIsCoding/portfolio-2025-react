// Apparence des cartes de projet.
import type { Project } from '~/types/project.types';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="rounded-xl border border-white/30 bg-white/20 p-8 text-white backdrop-blur-lg shadow-lg overflow-hidden">
      {/* <img src={project.thumbnailUrl} ... /> */}
      <div className="p-4">
        <span className="text-xs uppercase text-white bg-white/10 px-2 py-0.5 rounded-full mb-2 inline-block">
          {project.category}
        </span>
        <h2 className="text-xl font-bold text-white">{project.title}</h2>
        <p className="text-sm text-gray-400 mb-2">{project.date}</p>
        <p className="text-gray-300 mb-4">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tools.map(tool => (
            <span key={tool} className="text-xs border border-white/30 bg-white/20 p-8 text-white shadow-lg backdrop-blur-lg px-2 py-1 rounded-full">
              {tool}
            </span>
          ))}
        </div>
        {/* ... (logique des liens) ... */}
      </div>
    </div>
  );
}