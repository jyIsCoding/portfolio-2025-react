export type Project = {
  slug: string;
  title: string;
  date: string;
  category: string;
  role: string;
  shortDescription: string;
  longDescription: string;
  thumbnailUrl: string;
  gallery: string[];
  tools: string[];
  links: {
    github?: string;
    live?: string;
    behance?: string;
    youtube?: string;
  };
};