// Apparence des boutons filtres.
import { ALL_CATEGORIES, ALL_TOOLS } from '~/data/projects.config';

type ProjectFiltersProps = {
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  selectedTool: string;
  onToolChange: (value: string) => void;
};

export function ProjectFilters({
  selectedCategory,
  onCategoryChange,
  selectedTool,
  onToolChange,
}: ProjectFiltersProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <div>
        <label htmlFor="category-filter" className="block text-sm font-medium text-gray-300 mb-1">
          Trier par catégorie
        </label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="bg-gray-700 text-white border-gray-600 rounded-md p-2 w-full"
        >
          <option value="all">Toutes les catégories</option>
          {ALL_CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="tool-filter" className="block text-sm font-medium text-gray-300 mb-1">
          Trier par outil
        </label>
        <select
          id="tool-filter"
          value={selectedTool}
          onChange={(e) => onToolChange(e.target.value)}
          className="bg-gray-700 text-white border-gray-600 rounded-md p-2 w-full"
        >
          <option value="all">Tous les outils</option>
          {ALL_TOOLS.map(tool => <option key={tool} value={tool}>{tool}</option>)}
        </select>
      </div>
    </div>
  );
}