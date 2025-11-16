import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio - JY" },
    { name: "description", content: "Bienvenue sur mon portfolio 2025. Mon nom est Jayden Labelle." },
  ];
}

export default function Home() {
  return <Welcome />;
}
