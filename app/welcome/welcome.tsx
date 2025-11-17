import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { useProjects } from '~/hooks/useProjects';
import { HomeProjectCard } from '~/components/homeProjectCard';
import { useState } from 'react';
import type { CSSProperties } from "react";

// Relier mes boutons aux rôles de mes projets inscrits dans le JSON afin de filtrer et d'afficher seulement les projets correspondants.
const ROLES = [
  { id: 'code', label: 'Designer front-end' },
  { id: 'montage', label: 'Motion designer' },
  { id: 'design', label: 'Designer graphique' },
];


export function Welcome() {
  
  //Mémoriser la catégorie active. On commence par le premier de la liste.
  const [activeCategory, setActiveCategory] = useState('code');
  //Récupérer tous les projets.
  const { loading, filteredProjects } = useProjects(activeCategory, 'all');

  return (
    <main className="flex items-center">
     <section className="flex gap-6">
      <div className="flex flex-col w-1/2 gap-4 ">
        <h1 className="text-left font-semibold">
          Jayden Labelle
        </h1>

        {/* --- Boutons qui change contenus affichés--- */}
        <div className="flex gap-2 flex-wrap">
          {ROLES.map((role) => (
            <button 
              key={role.id}
              // Mettre à jour l'état de la catégorie sélectionnée
              onClick={() => setActiveCategory(role.id)}

              // Change la classe si l'id est le même que celui sélectionné
              className={activeCategory === role.id ? "active-button-roles" : "inactive-button-roles"
              }
            >
              + {role.label}
            </button>
          ))}
          
        </div>

        <p className="text-lg">
          Salut! Je m’appelle Jayden Labelle, un passionné de design web à l'Assomption. Avec une solide expérience en intégration web et en création de contenu visuel, je suis toujours à la recherche de nouvelles opportunités pour apprendre et grandir dans le domaine du design.
        </p>
      </div>

      <div className="flex flex-col w-1/2 gap-6">
      <section className="flex flex-col gap-2">
        <h2 className="">À propos...</h2>
        <div className="flex flex-col gap-4 border-white/10 bg-white/5 border-2 p-4 rounded-xl backdrop-blur-2xl ">
          <p>
            Récemment, je me suis beaucoup investi dans le développement front-end, en
            explorant React et en consolidant mes acquis sur WordPress. J’aime surtout partir
            d’une simple idée et la concrétiser en un projet web fonctionnel. C’est d’ailleurs
            pourquoi je me lance sérieusement sur quelques nouveaux projets personnels où
            j’étale naturellement mon amour de la création d’identité de marque.

          </p>
          <p>
            En tant qu’élève de dernière année en technique d’intégration multimédia, je suis à la
            recherche d’un stage à temps plein d’une durée minimale de huit semaines. Cette
            expérience s’inscrit dans le cadre de ma formation et peut donner droit à un crédit
            d’impôt (programme ATE). Une compensation financière est généralement prévue,
            mais je suis surtout motivé par l’envie d’apprendre en participant activement à des
            projets concrets et stimulants
          </p>
          <p>
            Également, je garde un pied solide dans la production vidéo. J’ai notamment eu la
            chance de coordonner le montage d’un reportage pour le groupe Attack of the
            Microphone, une belle expérience d’accroche narrative. Je maîtrise Premiere Pro et
            After Effects et je continue de me former sur DaVinci Resolve. J’aime aussi
            expérimenter avec les IA génératives, que ce soit pour trouver de nouveaux effets
            visuels ou pour optimiser mon flux de travail.
          </p>
          <p>
            Dans mon temps libre, j’adore explorer de nouveaux outils de design et suivre les dernières tendances en matière de création numérique. J'aime aussi repousser mes limites physiques en allant à la salle de sport ou en pratiquant des activités de plein air.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h2 className="">Mes projets...</h2>
          <a className="normal-button flex items-center gap-2" href="/projects">Voir tout!<i className="bi bi-arrow-right-circle-fill lg:text-2xl text:lg"></i></a>
        </div>
        <div className="flex flex-col gap-4">
        {/* --- Mes projets --- */}
          {loading ? (
            <p className="text-gray-400">Chargement...</p>
          ) : (
            // Liste des projets
            <div className="flex flex-col gap-4">
              {filteredProjects.length > 0 ? (

                // Carte de projet
                filteredProjects.map(project => (
                  <HomeProjectCard key={project.slug} project={project} />
                ))
              ) : (

                // Message si aucun projet ne correspond au rôle sélectionné
                <p className="text-gray-400 col-span-2 italic">
                  Aucun projet ne correspond à ce rôle. :/
                </p>
              )}
            </div>
          )}
        </div>
      </section>

      </div>

     </section>
    </main>
  );
}
