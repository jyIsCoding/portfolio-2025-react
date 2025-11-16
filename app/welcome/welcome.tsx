import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  return (
    <main className="flex items-center">
     <section className="flex gap-6">
      <div className="flex flex-col w-1/2 gap-4">
        <h1 className="text-left font-semibold">
          Jayden Labelle
        </h1>
      <div className="flex gap-2 flex-wrap">
        <h4 className="bg-rose-300/20 border-white/10 border-2 py-2 px-4 rounded-full size-fit backdrop-blur-2xl ">+ Front-end designer</h4>
        <h4 className="bg-blue-300/20 border-white/10 border-2 py-2 px-4 rounded-full size-fit backdrop-blur-2xl ">+ Motion designer</h4>
        <h4 className="bg-green-300/20 border-white/10 border-2 py-2 px-4 rounded-full size-fit backdrop-blur-2xl ">+ Graphic designer</h4>
      </div>

        <p className="text-lg">
          Salut! Je m’appelle Jayden Labelle, un passionné de design web à l'Assomption. Avec une solide expérience en intégration web et en création de contenu visuel, je suis toujours à la recherche de nouvelles opportunités pour apprendre et grandir dans le domaine du design.
        </p>
      </div>

      <div className="flex w-1/2">
        <div className="flex flex-col gap-4">
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
      </div>

     </section>
    </main>
  );
}
