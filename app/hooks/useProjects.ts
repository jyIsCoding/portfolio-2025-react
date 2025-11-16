// Récupère les projets et les filtre.
import { useState, useEffect, useMemo } from 'react';
import type { Project } from '~/types/project.types'; 

// Ce hook gère le chargement ET le filtrage
export function useProjects(selectedCategory: string, selectedTool: string) {
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  // Étape 1: Chargement des données 
  useEffect(() => {
    fetch('/data/projects.json')
      .then(response => response.json())
      .then(data => {
        setAllProjects(data.projects);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erreur lors du chargement des projets:", error);
        setLoading(false);
      });
  }, []); // Se lance une seule fois

  // Étape 2: Logique de filtrage 
  const filteredProjects = useMemo(() => {
    return allProjects.filter(project => {
      const categoryMatch = selectedCategory === "all" || project.category === selectedCategory;
      const toolMatch = selectedTool === "all" || project.tools.includes(selectedTool);
      return categoryMatch && toolMatch;
    });
  }, [allProjects, selectedCategory, selectedTool]); // Se recalcule si les filtres changent

  // Étape 3: Le hook retourne les données prêtes à l'emploi
  return {
    loading,
    filteredProjects, // On retourne directement les projets filtrés
  };
}